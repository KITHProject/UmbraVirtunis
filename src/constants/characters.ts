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
  },
];
