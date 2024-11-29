import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
	{ year: '2021', asisten: 100, lektor: 15, lektorKepala: 10, guruBesar: 5 },
	{ year: '2022', asisten: 105, lektor: 10, lektorKepala: 15, guruBesar: 5 },
	{ year: '2023', asisten: 110, lektor: 20, lektorKepala: 20, guruBesar: 15 },
	{ year: '2024', asisten: 130, lektor: 30, lektorKepala: 20, guruBesar: 20 },
];

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div
				style={{
					backgroundColor: '#fff',
					border: '1px solid #ccc',
					padding: '10px',
					borderRadius: '4px',
					fontSize: '12px',
				}}
			>
				<p>Asisten Ahli: {`${payload[0].payload.asisten}`}</p>
				<p>Lektor : {`${payload[0].payload.lektor}`}</p>
				<p>Lektor Kepala : {`${payload[0].payload.lektorKepala}`}</p>
				<p>Guru Besar : {`${payload[0].payload.guruBesar}`}</p>
			</div>
		);
	}
	return null;
};

const ChartAdmin = () => {
	return (
		<ResponsiveContainer>
			<LineChart data={data}>
				<Line type="monotone" dataKey="asisten" stroke="#005DA9" />
				<Line type="monotone" dataKey="lektor" stroke="#A99500" />
				<Line type="monotone" dataKey="lektorKepala" stroke="#00A900" />
				<Line type="monotone" dataKey="guruBesar" stroke="#A90000" />
				<XAxis
					tickSize={5}
					fontSize={12}
					dataKey="year"
					stroke="#8884d8"
					interval="preserveStartEnd"
				/>
				<Tooltip content={<CustomTooltip />} />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ChartAdmin;
