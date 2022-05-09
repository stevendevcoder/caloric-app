import moment from 'moment';
import React from 'react';
import {
  ComposedChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import 'moment/locale/es';
import styles from 'styles/components/Chart/Tooltip.module.scss';
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${styles.tooltip}`}>
        <span className="intro">{payload[0].payload.weight}Kg</span>
        <span className="intro">
          {moment(payload[0].payload.date).format('LL')}
        </span>
      </div>
    );
  }

  return null;
};

export default function LineNaturalChart({ data }) {
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
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F9D057" stopOpacity={1} />
            <stop offset="95%" stopColor="#E9EEEC" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip
          itemStyle={{ display: 'flex' }}
          cursor={false}
          content={CustomTooltip}
        />
        <XAxis
          dataKey="date"
          dy={55}
          interval={0}
          angle={-85}
          height={150}
          hide={true}
        />
        <YAxis
          width={31}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}kg`}
        />
        <Area
          type="natural"
          dataKey="weight"
          stroke="#1C402C"
          fill="url(#colorUv)"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
