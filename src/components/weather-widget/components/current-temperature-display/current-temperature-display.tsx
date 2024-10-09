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
			<h3 className={'text-xl'}>New York</h3>
			<p className={'text-6xl'}>14°</p>
			<div className={'text-sm font-semibold'}>
				<p>Thunderstorm</p>
				<div className={'flex gap-2 justify-center'}>
					<p>H:17°</p>
					<p>L:8°</p>
				</div>
			</div>
		</div>
	);
};
