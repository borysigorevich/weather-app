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

	return (
		<div className="grid items-center justify-items-center w-full grid-cols-[22.45px_auto_22.45px] gap-1">
			<p>{minTemp.toFixed(0)}°</p>
-
			<p>{maxTemp.toFixed(0)}°</p>
		</div>
	);
};
