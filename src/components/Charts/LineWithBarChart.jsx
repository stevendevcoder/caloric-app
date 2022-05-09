import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
export default function LineWithBarChart({ data, chartColor }) {
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
        <Tooltip
          itemStyle={{ display: 'flex' }}
          contentStyle={{ background: '#ffffff7s0' }}
        />
        <Bar dataKey="uv" legendType="wye" barSize={2} fill={chartColor} />
        <Line
          type="natural"
          dataKey="uv"
          strokeWidth={2}
          dot={false}
          stroke="#1C402C"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
