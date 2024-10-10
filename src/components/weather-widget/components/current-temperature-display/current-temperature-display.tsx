import { cn } from '@/lib/utils';
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
		<div className={'text-center @xs:my-2 @2xl:my-4'}>
			<h3 className={'text-xl'}>{location}</h3>
			<p className={cn('text-6xl hidden group-has-[[data-4x4]]/container:block')}>
				{temperature.toFixed(0)}°
			</p>
			<div className={'text-sm font-semibold'}>
				<div className={'@xs:flex justify-center gap-1 items-center'}>
					<p className={cn('text-sm group-has-[[data-4x4]]/container:hidden')}>
						{temperature.toFixed(0)}°
					</p>
					<span
						className={
							'mx-1 h-2.5 w-px bg-white group-has-[[data-4x4]]/container:hidden'
						}
					/>
					<p>{weather}</p>
				</div>
				<div
					className={cn(
						'gap-2 justify-center hidden group-has-[[data-4x4]]/container:flex'
					)}
				>
					<p>H:{high.toFixed(0)}°</p>
					<p>L:{low.toFixed(0)}°</p>
				</div>
			</div>
		</div>
	);
};
