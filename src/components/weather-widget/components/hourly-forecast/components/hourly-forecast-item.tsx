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
		<div className={'grid gap-1 text-xs justify-items-center'}>
			<p className={''}>Now</p>
			<Image
				className={'h-7 w-7 object-cover'}
				src={'https://cdn.weatherapi.com/weather/64x64/night/122.png'}
				width={28}
				height={28}
				alt={'weather'}
			/>
			<p>12°</p>
		</div>
	);
};
