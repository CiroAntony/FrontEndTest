import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AsesorChart = ({ data }) => {
  return (
    <ResponsiveContainer width="50%" height={90} className="chart">
      <BarChart data={data}>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#f2ec80" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AsesorChart;
