/* eslint-disable react/prop-types */
import React from "react";
import {
	ResponsiveContainer,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Bar,
	Tooltip,
} from "recharts";

const CBarChart = ({ data }) => {
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
	// const data = [];
	// for (let i = 0; i < 6; ++i) {
	// 	data.push({
	// 		name: `Sem ${i + 1}`,
	// 		CGPA: Math.floor(Math.random() * 10) + 1,
	// 	});
	// }
	// data.push({ name: "Sem 7", CGPA: 0 });
	// data.push({ name: "Sem 8", CGPA: 0 });

	const cgpa = [];
	data.forEach((el) => {
		cgpa.push({ name: el.name, cgpa: parseFloat(el.value) });
	});
	for (let i = cgpa.length+1; i <= 8; ++i) cgpa.push({ name: `sem${i}`, cgpa: 0 });
	console.log(cgpa);

	return (
		<ResponsiveContainer width="100%" aspect={2}>
			<BarChart data={cgpa} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
				<CartesianGrid stroke="#6262d0" />
				<XAxis dataKey="name" />
				<YAxis dataKey="cgpa" />
				<Tooltip />
				<Bar type="monotone" dataKey="cgpa" fill="rgba(0,212,255,1)" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default CBarChart;
