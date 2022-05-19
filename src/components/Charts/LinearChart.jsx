import React from 'react';
import {
  ComposedChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
export default function LinearChart({ data, chartColor }) {
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth="500px">
      <ComposedChart
        width={200}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid
          stroke="#ffffff80"
          horizontal={false}
          yAxis={50}
          viewBox={true}
        />
        <Tooltip
          itemStyle={{ display: 'flex' }}
          contentStyle={{ background: '#1C402C' }}
        />
        <ReferenceLine
          y={1600}
          label="1800mg"
          stroke="#ffffff80"
          strokeDasharray="3 3"
          ifOverflow="extendDomain"
        />
        <Line
          type="linear"
          dataKey="uv"
          strokeWidth={2}
          dot={{ r: 4, fill: '#1C402C' }}
          activeDot={{ r: 6 }}
          stroke={chartColor}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
