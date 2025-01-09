import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "January",
    sales: 4000,
  },
  {
    name: "February",
    sales: 3000,
  },
  {
    name: "March",
    sales: 2000,
  },
  {
    name: "April",
    sales: 2780,
  },
  {
    name: "May",
    sales: 1890,
  },
  {
    name: "June",
    sales: 2390,
  },
  {
    name: "July",
    sales: 3490,
  },
  {
    name: "August",
    sales: 3490,
  },
  {
    name: "September",
    sales: 5490,
  },
  {
    name: "October",
    sales: 7490,
  },
  {
    name: "November",
    sales: 2490,
  },
  {
    name: "December",
    sales: 1000,
  },
];

const chartConfig = {} satisfies ChartConfig;

const CustomAreaChart = () => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="h-[355px] w-full">
        <BarChart data={data}>
          <YAxis dataKey="sales" fontSize={12} />
          <XAxis dataKey="name" fontSize={12} />
          <ChartTooltip
            content={<ChartTooltipContent className="bg-secondary-bg-color" />}
          />
          <CartesianGrid />
          <Bar
            type="basisClosed"
            widths={20}
            dataKey="sales"
            fill="var(--primary-color)"
            radius={[10, 10, 0, 0]}
            barSize={30}
            animationEasing="ease-in-out"
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default CustomAreaChart;
