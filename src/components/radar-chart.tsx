'use client';

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

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
    <div className="w-full h-64 md:h-full">
      <ChartContainer
        config={chartConfig}
        className="w-full h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={chartData}
            margin={{
              top: 15,
              right: 15,
              bottom: 15,
              left: 15,
            }}
          >
            <ChartTooltip
              content={<ChartTooltipContent labelKey="value" />}
              cursor={false}
            />
            <PolarAngleAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: '#ffffff' }}
            />
            <PolarGrid />
            <Radar
              dataKey="value"
              stroke="var(--color-desktop)"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}