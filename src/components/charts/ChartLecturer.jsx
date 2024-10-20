import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
	{ year: 2020, value: 100 },
	{ year: 2021, value: 120 },
	{ year: 2022, value: 130 },
	{ year: 2023, value: 140 },
	{ year: 2024, value: 150 },
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
				<p>{`${payload[0].payload.value}`}</p>
			</div>
		);
	}
	return null;
};

const ChartLecturer = () => {
	return (
		<ResponsiveContainer>
			<LineChart data={data}>
				<Line type="monotone" dataKey="value" stroke="#ffffff" />
				<XAxis
					tickSize={5}
					fontSize={12}
					dataKey="year"
					stroke="#ffffff"
					interval="preserveStartEnd"
				/>
				<Tooltip content={<CustomTooltip />} />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ChartLecturer;
