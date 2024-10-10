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
		<div
			className={
				'grid grid-cols-[29px_auto_1fr] gap-4 py-1 justify-between font-semibold text-sm items-center border-b border-b-white/40'
			}
		>
			<p>{day}</p>
			<Image
				className={'h-7 w-7 object-cover'}
				src={icon}
				width={28}
				height={28}
				alt={'weather'}
			/>
			<TemperatureLine minTemp={low} maxTemp={high} avgTemp={15} />
		</div>
	);
};
