import { TemperatureLine } from '@/components/weather-widget/components/daily-forecast/daily-forecast-item/components/temperature-line';
import Image from 'next/image';
import React from 'react';

type DailyForecastItemProps = {
	day: string;
	high: number;
	low: number;
	icon: string;
};

export const DailyForecastItem = ({ low, icon, day, high }: DailyForecastItemProps) => {
	return (
		<div className={'flex gap-4 py-1 justify-between font-semibold text-sm items-center border-b border-b-white/40'}>
			<p>Today</p>
			<Image
				className={'h-7 w-7 object-cover'}
				src={'https://cdn.weatherapi.com/weather/64x64/night/122.png'}
				width={28}
				height={28}
				alt={'weather'}
			/>
			<TemperatureLine minTemp={low} maxTemp={high} avgTemp={15} />
		</div>
	);
};
