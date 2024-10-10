import React from 'react';

type CurrentTemperatureDisplayProps = {
	location: string;
	temperature: number;
	weather: string;
	high: number;
	low: number;
};

export const CurrentTemperatureDisplay = ({
	low,
	temperature,
	weather,
	high,
	location,
}: CurrentTemperatureDisplayProps) => {
	return (
		<div className={'text-center my-4'}>
			<h3 className={'text-xl'}>{location}</h3>
			<p className={'text-6xl'}>{temperature.toFixed(0)}°</p>
			<div className={'text-sm font-semibold'}>
				<p>{weather}</p>
				<div className={'flex gap-2 justify-center'}>
					<p>H:{high.toFixed(0)}°</p>
					<p>L:{low.toFixed(0)}°</p>
				</div>
			</div>
		</div>
	);
};
