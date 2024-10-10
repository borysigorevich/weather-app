import { TemperatureLine } from '@/components/weather-widget/components/daily-forecast/daily-forecast-item/components/temperature-line';
import Image from 'next/image';
import React from 'react';

type HourlyForecastItemProps = {
	time: string;
	temperature: number;
	icon: string;
};

export const HourlyForecastItem = ({
	time,
	icon,
	temperature,
}: HourlyForecastItemProps) => {
	return (
		<div className={'grid gap-1 text-xs justify-items-center font-semibold'}>
			<p>{time}</p>
			<Image
				className={'h-7 w-7 object-cover'}
				src={icon}
				width={28}
				height={28}
				alt={'weather'}
			/>
			<p>{temperature}°</p>
		</div>
	);
};
