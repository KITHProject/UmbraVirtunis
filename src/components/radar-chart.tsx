'use client';

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  desktop: {
    label: 'Character Stats',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

type Props = {
  chartData: {
    value: number
    label: string
  }[]
};

export function RadarHeroChart({ chartData }: Props) {
  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-2 aspect-square max-h-[300px]"
      >
        <RadarChart
          data={chartData}
          margin={{
            top: 15,
            bottom: 10,
          }}
        >
          <ChartTooltip
            content={<ChartTooltipContent labelKey="value" />}
            cursor={false}
          />
          <PolarAngleAxis
            dataKey="label"
            tick={{ fontSize: 14, fill: '#ffffff' }}
          />
          <PolarGrid />
          <Radar
            dataKey="value"
            stroke="var(--color-desktop)"
            fill="var(--color-desktop)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ChartContainer>
    </div>
  );
}
