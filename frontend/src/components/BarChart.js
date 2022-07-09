/* eslint-disable react/prop-types */
import React from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from "recharts";

const CBarChart = () => {
  // var options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         display: true,
  //         stacked: true,
  //         ticks: {
  //           min: 0, // minimum value
  //           max: 10 // maximum value
  //         }
  //       }
  //     ]
  //   }
  // };
  const data = [];
  for (let i = 0; i < 6; ++i) {
    data.push({
      name: `Sem ${i + 1}`,
      CGPA: Math.floor(Math.random() * 10) + 1
    });
  }
  data.push({ name: "Sem 7", CGPA: 0 });
  data.push({ name: "Sem 8", CGPA: 0 });
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#6262d0" />
        <XAxis dataKey="name" />
        <YAxis dataKey="CGPA" />
        <Tooltip />
        <Bar type="monotone" dataKey="CGPA" fill="rgba(0,212,255,1)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CBarChart;
