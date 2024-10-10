import React from 'react';

interface TemperatureLineProps {
	minTemp: number;
	maxTemp: number;
	avgTemp?: number;
}

export const TemperatureLine: React.FC<TemperatureLineProps> = ({
	minTemp,
	maxTemp,
	avgTemp,
}) => {
	const totalRange = maxTemp - minTemp;
	const avgTempPosition = avgTemp ? avgTemp - minTemp : totalRange / 2;

	const leftFlexBasis = `${(avgTempPosition / totalRange) * 100}%`;
	const rightFlexBasis = `${((maxTemp - (avgTemp || minTemp)) / totalRange) * 100}%`;

	console.log({
		minTemp,
		maxTemp,
		avgTemp,
		leftFlexBasis,
		rightFlexBasis,
		totalRange,
		avgTempPosition
	})

	return (
		<div className="grid items-center w-full grid-cols-[22.45px_1fr_22.45px] gap-1">
			<p>{minTemp.toFixed(0)}°</p>
			<div className={'flex items-center w-full h-1'}>
				<div
					className="bg-gray-300 h-1 rounded-l-full"
					style={{flexBasis: leftFlexBasis}}
				/>

				{/* Active (colored) part of the range */}
				<div className="bg-green-500 h-1" style={{width: '10px'}}/>

				{/* Right (empty) part of the range */}
				<div
					className="bg-gray-300 h-1 rounded-r-full"
					style={{flexBasis: rightFlexBasis}}
				/>
			</div>

			<p>{maxTemp.toFixed(0)}°</p>
		</div>
	);
};
