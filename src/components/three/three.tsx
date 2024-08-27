import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { HorizontalBlurShader } from 'three/examples/jsm/shaders/HorizontalBlurShader.js';
import { VerticalBlurShader } from 'three/examples/jsm/shaders/VerticalBlurShader.js';
import { FilmShader } from 'three/examples/jsm/shaders/FilmShader.js';


const BadTVShader = {
  uniforms: {
    'distortion': { value: 0.5 },
    'distortion2': { value: 0.5 },
    'speed': { value: 0.5 },
    'rollSpeed': { value: 0.5 },
  },
  vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  fragmentShader: `
      uniform float distortion;
      uniform float distortion2;
      uniform float speed;
      uniform float rollSpeed;
      varying vec2 vUv;
  
      void main() {
        vec2 uv = vUv;
        uv.y += sin(uv.x * 10.0 + speed) * distortion;
        uv.x += sin(uv.y * 10.0 + rollSpeed) * distortion2;
        gl_FragColor = vec4(uv, 1.0, 1.0);
      }
    `
};


const VolumetericLightShader = {
  uniforms: {
    tDiffuse: { value: null },
    lightPosition: { value: new THREE.Vector2(0.5, 0.5) },
    exposure: { value: 1 },
    decay: { value: 1 },
    density: { value: 6 },
    weight: { value: 0.57 },
    samples: { value: 30 },
  },
  vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  fragmentShader: `
      varying vec2 vUv;
      uniform sampler2D tDiffuse;
      uniform vec2 lightPosition;
      uniform float exposure;
      uniform float decay;
      uniform float density;
      uniform float weight;
      uniform int samples;
  
      const int MAX_SAMPLES = 100;
  
      void main() {
        vec2 texCoord = vUv;
        vec2 deltaTextCoord = texCoord - lightPosition;
        deltaTextCoord *= 1.0 / float(samples) * density;
        vec4 color = texture2D(tDiffuse, texCoord);
        float illuminationDecay = 1.0;
  
        for (int i = 0; i < MAX_SAMPLES; i++) {
          if (i == samples) break;
          texCoord += deltaTextCoord;
          vec4 sample = texture2D(tDiffuse, texCoord);
          sample *= illuminationDecay * weight;
          color += sample;
          illuminationDecay *= decay;
        }
  
        gl_FragColor = color * exposure;
      }
    `
};
  
const AdditiveBlendingShader = {
  uniforms: {
    tDiffuse: { value: null },
    tAdd: { value: null }
  },
  vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform sampler2D tAdd;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        vec4 add = texture2D(tAdd, vUv);
        gl_FragColor = color + add;
      }
    `
};

const blendPass = new ShaderPass(AdditiveBlendingShader);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.5,
  0.8,
  0.3
);

const filmPass = new ShaderPass(FilmShader);
const badTVPass = new ShaderPass(BadTVShader);
const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const guiRef = useRef<GUI | null>(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    const lightColor = 0x0099ff;
    const DEFAULT_LAYER = 0;
    const OCCLUSION_LAYER = 1;
    const renderScale = 0.25;

    let composer: EffectComposer, occlusionComposer: EffectComposer, itemMesh: THREE.Mesh, occMesh: THREE.Mesh, occRenderTarget: THREE.WebGLRenderTarget, lightSource: THREE.Object3D, vlShaderUniforms: any;

    const getImageTexture = (image: HTMLImageElement, density = 1) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      const { width, height } = image;

      canvas.width = width * density;
      canvas.height = height * density;

      ctx.drawImage(image, 0, 0, width * density, height * density);

      return canvas;
    };

    const setupScene = () => {
      lightSource = new THREE.Object3D();
      lightSource.position.set(0, -15, -15);

      const itemGeo = new THREE.PlaneGeometry(9, 2.1);
      const itemMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.7 });

      const img = new Image();
      img.src = 'https://i.imgur.com/rPdlvTw.png';
      img.crossOrigin = 'Anonymous';

      img.onload = () => {
        const itemTexture = new THREE.Texture(
          getImageTexture(img),
          undefined,
          THREE.ClampToEdgeWrapping,
          THREE.ClampToEdgeWrapping,
          undefined,
          THREE.LinearFilter
        );
        itemTexture.needsUpdate = true;
        itemMaterial.map = itemTexture;

        itemMesh = new THREE.Mesh(itemGeo, itemMaterial);
        scene.add(itemMesh);

        const occItemMaterial = new THREE.MeshBasicMaterial({ color: lightColor });
        occItemMaterial.map = itemTexture;
        occMesh = new THREE.Mesh(itemGeo, occItemMaterial);
        occMesh.layers.set(OCCLUSION_LAYER);
        scene.add(occMesh);
      };

      camera.position.z = 4.5;
    };

    const setupPostprocessing = () => {
      occRenderTarget = new THREE.WebGLRenderTarget(
        window.innerWidth * renderScale,
        window.innerHeight * renderScale
      );

      const hBlur = new ShaderPass(HorizontalBlurShader);
      const vBlur = new ShaderPass(VerticalBlurShader);
      const bluriness = 7;
      if (hBlur.uniforms.h) {
        hBlur.uniforms.h.value = bluriness / window.innerWidth;
      }
      if (vBlur.uniforms.v) {
        vBlur.uniforms.v.value = bluriness / window.innerHeight;
      }
    

     
      if(badTVPass.uniforms.distortion && badTVPass.uniforms.distortion2 && badTVPass.uniforms.speed && badTVPass.uniforms.rollSpeed) {
        badTVPass.uniforms.distortion.value = 1.9;
        badTVPass.uniforms.distortion2.value = 1.2;
        badTVPass.uniforms.speed.value = 0.1;
        badTVPass.uniforms.rollSpeed.value = 0;
      }


      const vlPass = new ShaderPass(VolumetericLightShader);
      vlShaderUniforms = vlPass.uniforms;
      vlPass.needsSwap = false;

      occlusionComposer = new EffectComposer(renderer, occRenderTarget);
      occlusionComposer.addPass(new RenderPass(scene, camera));
      occlusionComposer.addPass(hBlur);
      occlusionComposer.addPass(vBlur);
      occlusionComposer.addPass(hBlur);
      occlusionComposer.addPass(vBlur);
      occlusionComposer.addPass(hBlur);
      occlusionComposer.addPass(badTVPass);
      occlusionComposer.addPass(vlPass);


      if(filmPass.uniforms.grayscale && filmPass.uniforms.sIntensity && filmPass.uniforms.nIntensity && filmPass.uniforms.sCount) {
        filmPass.uniforms.sCount.value = 1200;
        filmPass.uniforms.grayscale.value = false;
        filmPass.uniforms.sIntensity.value = 1.5;
        filmPass.uniforms.nIntensity.value = 0.2;
      }


      
      if(blendPass.uniforms.tAdd) {
        blendPass.uniforms.tAdd.value = occRenderTarget.texture;
      }
      blendPass.renderToScreen = true;

      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(bloomPass);
      composer.addPass(badTVPass);
      composer.addPass(filmPass);
      composer.addPass(blendPass);
    };

    const setupGUI = () => {
      const gui = new GUI();
      guiRef.current = gui;

      const updateShaderLight = () => {
        const p = lightSource.position.clone();
        const vector = p.project(camera);
        const x = (vector.x + 1) / 2;
        const y = (vector.y + 1) / 2;
        vlShaderUniforms.lightPosition.value.set(x, y);
      };

      updateShaderLight();

      let folder = gui.addFolder('Bloom');
      folder.add(bloomPass, 'radius').min(0).max(10).name('Radius');
      folder.add(bloomPass, 'threshold').min(0).max(1).name('Threshold');
      folder.add(bloomPass, 'strength').min(0).max(10).name('Strength');
      folder.open();

      folder = gui.addFolder('TV');
      if(badTVPass.uniforms.distortion && badTVPass.uniforms.distortion2 && badTVPass.uniforms.speed && badTVPass.uniforms.rollSpeed) {
        folder.add(badTVPass.uniforms.distortion, 'value').min(0).max(10).name('Distortion 1');
        folder.add(badTVPass.uniforms.distortion2, 'value').min(0).max(10).name('Distortion 2');
        folder.add(badTVPass.uniforms.speed, 'value').min(0).max(1).name('Speed');
        folder.add(badTVPass.uniforms.rollSpeed, 'value').min(0).max(10).name('Roll Speed');
        folder.open();
      }
  

      folder = gui.addFolder('Light Position');
      folder.add(lightSource.position, 'x').min(-50).max(50).onChange(updateShaderLight);
      folder.add(lightSource.position, 'y').min(-50).max(50).onChange(updateShaderLight);
      folder.add(lightSource.position, 'z').min(-50).max(50).onChange(updateShaderLight);
      folder.open();

      folder = gui.addFolder('Volumeteric Light Shader');
      folder.add(vlShaderUniforms.exposure, 'value').min(0).max(1).name('Exposure');
      folder.add(vlShaderUniforms.decay, 'value').min(0).max(1).name('Decay');
      folder.add(vlShaderUniforms.density, 'value').min(0).max(10).name('Density');
      folder.add(vlShaderUniforms.weight, 'value').min(0).max(1).name('Weight');
      folder.add(vlShaderUniforms.samples, 'value').min(1).max(100).name('Samples');
      folder.open();
    };

    const onFrame = () => {
      requestAnimationFrame(onFrame);
      update();
      render();
    };

    const update = () => {
      const timeDelta = clockRef.current.getDelta();
      const elapsed = clockRef.current.getElapsedTime();

      if(filmPass.uniforms.time && badTVPass.uniforms.time)
      {
        filmPass.uniforms.time.value += timeDelta;
        badTVPass.uniforms.time.value += 0.01;
      }
    

      if (itemMesh) {
        itemMesh.rotation.y = Math.sin(elapsed / 2) / 15;
        itemMesh.rotation.z = Math.cos(elapsed / 2) / 50;
        occMesh.rotation.copy(itemMesh.rotation);
      }
    };

    const render = () => {
      camera.layers.set(OCCLUSION_LAYER);
      occlusionComposer.render();

      camera.layers.set(DEFAULT_LAYER);
      composer.render();
    };

    setupScene();
    setupPostprocessing();
    setupGUI();
    onFrame();

    return () => {
      if (guiRef.current) guiRef.current.destroy();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
};

export default ThreeScene;
