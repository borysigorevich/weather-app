import { Divider } from '@/components/ui/divider';
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
		<div className={'grid gap-0.5 text-xs justify-items-center font-semibold'}>
			<p>{time}</p>
			<Image
				className={'h-7 w-7 object-cover'}
				src={icon}
				width={28}
				height={28}
				alt={'weather'}
			/>
			<p>{temperature}°</p>
			<Divider
				className={'my-0 w-3/4 hidden group-has-[[data-4x2]]/container:block'}
			/>
		</div>
	);
};
