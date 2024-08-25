"use client"
import Image from "next/image"
import React from "react"
import Ninja from "@/assets/ninja.png"
import NinjaNOBG from "@/assets/ninja-nobg.png"
import { PinContainer } from "./ui/3d-pin-v2"

export function CardHover() {
  return (
    <div className="flex h-[10rem] w-full items-center justify-center">
      <PinContainer
        title="/ui.aceternity.com"
        pinChild={
          <Image
            src={NinjaNOBG}
            alt={"Ninja"}
            width={2000}
            height={2000}
            className="z-50 h-full w-full rotate-45"
          />
        }
      >
        <div className="flex h-[10rem] w-[10rem] basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2">
          <Image
            src={Ninja}
            alt={"Ninja"}
            width={2000}
            height={2000}
            className="h-full w-full"
          />
        </div>
      </PinContainer>
    </div>
  )
}
