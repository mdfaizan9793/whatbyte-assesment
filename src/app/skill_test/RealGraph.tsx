import React, { PureComponent } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { RootState } from '../../../GlobalRedux/store';

const data = [
  {
    name: '0',
    uv: 4,
  },
  {
    name: '25',
    uv: 3,
  },
  {
    name: '50',
    uv: 20,
  },
  {
    name: '75',
    uv: 27,
  },
  {
    name: '100',
    uv: 4
  },
];

type Props = {}
export default function RealGraph({ }: Props) {
  const UserData = useSelector((state: RootState) => state.UserData.Percentile)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
