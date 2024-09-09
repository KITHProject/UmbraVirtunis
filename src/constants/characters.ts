import human from '@/assets/human-man-full.png';
import orc from '@/assets/orc-man-full.png';
import dwarf from '@/assets/dwarf-man-full.png';
import HumanAvatar from '@/assets/human-man-avatar.png';
import OrcAvatar from '@/assets/orc-man-avatar.png';
import DwarfAvatar from '@/assets/dwarf-man-avatar.png';
import DwarfWomanAvatar from '@/assets/dwarf-woman-avatar.png';
import HumanWomanAvatar from '@/assets/human-woman-avatar.png';
import OrcWomanAvatar from '@/assets/orc-woman-avatar.png';
import dwarfwoman from '@/assets/dwarf-woman-full.png';
import humanwoman from '@/assets/human-woman-full.png';
import orcwoman from '@/assets/orc-woman-full.png';
import ninja from '@/assets/ninja-man-full.png';
import ninjawoman from '@/assets/ninja-woman-full.png';
import NinjaAvatar from '@/assets/ninja-man-avatar.png';
import NinjaWomanAvatar from '@/assets/ninja-woman-avatar.png';
import elf from '@/assets/elf-man-full.png';
import elfwoman from '@/assets/elf-woman-full.png';
import ElfAvatar from '@/assets/elf-man-avatar.png';
import ElfWomanAvatar from '@/assets/elf-woman-avatar.png';
import dragon from '@/assets/dragon-full.png';
import DragonAvatar from '@/assets/dragon-avatar.png';
import lizard from  '@/assets/lizard-full.png';
import LizardAvatar from '@/assets/lizard-avatar.png';


export const arrayOfCharacters1 = [
  {
    name: 'Man',
    avatar: HumanAvatar,
    image: human,
    description: 'Human males are versatile and adaptable, with balanced stats across all categories. They excel in endurance and intelligence, making them strong strategists and capable fighters in prolonged battles.',
    value: 'human',
    chartData: [
      { label: 'Str', value: 8 },
      { label: 'Agi', value: 7 },
      { label: 'Spd', value: 6 },
      { label: 'Int', value: 9 },
      { label: 'End', value: 7.5 },
    ],
    modelPath: '/human_man.glb',
  },
  {
    name: 'Woman',
    avatar: HumanWomanAvatar,
    image: humanwoman,
    description: 'Human females are agile and quick, with high intelligence and speed. They are often skilled in tactics and magic, relying on their wits and speed to outmaneuver opponents.',
    value: 'human-woman',
    chartData: [
      { label: 'Str', value: 7 },
      { label: 'Agi', value: 8 },
      { label: 'Spd', value: 6.5 },
      { label: 'Int', value: 8.5 },
      { label: 'End', value: 8 },
    ],
    modelPath: '/human_woman.glb',
  },
  {
    name: 'Dwarf',
    avatar: DwarfAvatar,
    image: dwarf,
    description: 'Dwarf males are incredibly strong and durable, boasting the highest strength and endurance. Their sturdy build makes them formidable in close combat, though they are less agile.',
    value: 'dwarf',
    chartData: [
      { label: 'Str', value: 9 },
      { label: 'Agi', value: 5 },
      { label: 'Spd', value: 4 },
      { label: 'Int', value: 7 },
      { label: 'End', value: 8.5 },
    ],
    modelPath: '/dwarf_man.glb',
  },
  {
    name: 'Dwarf Woman',
    avatar: DwarfWomanAvatar,
    image: dwarfwoman,
    description: 'Dwarf females combine strength with surprising agility. While they are not as strong as their male counterparts, they are quicker on their feet and possess high endurance, making them relentless warriors.',
    value: 'dwarf-woman',
    chartData: [
      { label: 'Str', value: 8.5 },
      { label: 'Agi', value: 5.5 },
      { label: 'Spd', value: 4.5 },
      { label: 'Int', value: 7.5 },
      { label: 'End', value: 8 },
    ],
    modelPath: '/dwarf_woman.glb',
  },
];

export const arrayOfCharacters2 = [
  {
    name: 'Ninja Man',
    avatar: NinjaAvatar,
    image: ninja,
    description: 'Ninja males are masters of speed and agility, with unmatched reflexes. They prioritize stealth and quick strikes, excelling in intelligence to plan and execute deadly tactics.',
    value: 'ninja',
    chartData: [
      { label: 'Str', value: 6 },
      { label: 'Agi', value: 9 },
      { label: 'Spd', value: 8 },
      { label: 'Int', value: 7 },
      { label: 'End', value: 6.5 },
    ],
    modelPath: '/orc.glb',
  },
  {
    name: 'Ninja Woman',
    avatar: NinjaWomanAvatar,
    image: ninjawoman,
    description: 'Ninja females are the epitome of agility and intelligence, using their speed and sharp minds to outthink and outmaneuver enemies. They are swift and silent, making them deadly assassins',
    value: 'ninja-woman',
    chartData: [
      { label: 'Str', value: 5.5 },
      { label: 'Agi', value: 9 },
      { label: 'Spd', value: 8 },
      { label: 'Int', value: 7.5 },
      { label: 'End', value: 7 },
    ],
    modelPath: '/orc.glb',
  },
  {
    name: 'Orc Man',
    avatar: OrcAvatar,
    image: orc,
    description: ' Orc males are powerhouses of strength and endurance, dominating in brute force. They are not as fast or agile but compensate with overwhelming power and resilience in battle.',
    value: 'orc',
    chartData: [
      { label: 'Str', value: 9.5 },
      { label: 'Agi', value: 4.5 },
      { label: 'Spd', value: 5.5 },
      { label: 'Int', value: 6 },
      { label: 'End', value: 9 },
    ],
    modelPath: '/orc.glb',
  },
  {
    name: 'Orc Woman',
    avatar: OrcWomanAvatar,
    image: orcwoman,
    description: 'Orc females are slightly more agile than the males, with a balance of strength and endurance. They are fierce warriors who use their agility to strike with precision while still holding considerable power.',
    value: 'orc-woman',
    chartData: [
      { label: 'Str', value: 9 },
      { label: 'Agi', value: 5 },
      { label: 'Spd', value: 6 },
      { label: 'Int', value: 6.5 },
      { label: 'End', value: 8.5 },
    ],
    modelPath: '/orc_woman.glb',
  },
];

export const arrayOfCharacters3 = [
  {
    name: 'Elf Man',
    avatar: ElfAvatar,
    image: elf,
    description: 'Elf men are paragons of agility and precision, known for their unmatched skill in archery and swordplay. They blend speed with elegance, their movements precise and deliberate. Though not as physically imposing as other races, their keen senses and deep connection to nature give them an edge in both combat and diplomacy, making them versatile and formidable.',
    value: 'elf',
    chartData: [
      { label: 'Str', value: 6 },
      { label: 'Agi', value: 9 },
      { label: 'Spd', value: 8 },
      { label: 'Int', value: 7 },
      { label: 'End', value: 6.5 },
    ],
    modelPath: '/orc.glb',
  },
  {
    name: 'Elf Woman',
    avatar: ElfWomanAvatar,
    image: elfwoman,
    description: 'Elf women are the epitome of grace and agility, moving with a fluidity that seems almost supernatural. They possess sharp intellect and exceptional skill in magic, making them formidable strategists and spellcasters. While they may lack the raw strength of other races, their speed, precision, and mystical prowess make them deadly opponents in any encounter.',

    value: 'elf-woman',
    chartData: [
      { label: 'Str', value: 5.5 },
      { label: 'Agi', value: 9 },
      { label: 'Spd', value: 8 },
      { label: 'Int', value: 7.5 },
      { label: 'End', value: 7 },
    ],
    modelPath: '/orc.glb',
  },
  {
    name: 'Lizard',
    avatar: LizardAvatar,
    image: lizard,
    description: 'Lizardfolk are agile and cunning, thriving in both water and on land. They rely on their quick reflexes and sharp instincts in combat, striking with surprising speed and ferocity. While they may not possess the same raw power as larger creatures, their adaptability, stealth, and resourcefulness make them dangerous and unpredictable adversaries.',

    value: 'lizard',
    chartData: [
      { label: 'Str', value: 9.5 },
      { label: 'Agi', value: 4.5 },
      { label: 'Spd', value: 5.5 },
      { label: 'Int', value: 6 },
      { label: 'End', value: 9 },
    ],
    modelPath: '/orc.glb',
  },
  {
    name: 'Dragon',
    avatar: DragonAvatar,
    image: dragon,
    description: 'Dragons are titanic beings of immense power and wisdom, their mere presence instilling awe and fear. They command the skies with their enormous wingspans and unleash devastating breath attacks that can decimate entire armies. While their size might suggest a lack of speed, dragons are surprisingly swift, combining brute strength with ancient magic to dominate any battlefield.',

    value: 'dragon',
    chartData: [
      { label: 'Str', value: 9 },
      { label: 'Agi', value: 5 },
      { label: 'Spd', value: 6 },
      { label: 'Int', value: 6.5 },
      { label: 'End', value: 8.5 },
    ],
    modelPath: '/orc.glb',
  },
];