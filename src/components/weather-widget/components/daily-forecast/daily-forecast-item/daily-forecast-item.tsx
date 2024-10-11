import Image from 'next/image';
import React from 'react';

type DailyForecastItemProps = {
	day: string;
	high: number;
	low: number;
	icon: string;
	weather: string;
};

export const DailyForecastItem = ({ low, icon, day, high, weather }: DailyForecastItemProps) => {
	return (
		<div
			className={
				'grid grid-cols-[29px_28px_1fr] group-has-[[data-4x4]]/container:grid-cols-[29px_28px_1fr_1fr] gap-6 py-1 font-semibold text-sm items-center border-b border-b-white/40'
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
			<p className={'hidden group-has-[[data-4x4]]/container:block'}>
				{weather}
			</p>
			<div className="grid items-center justify-items-center gap-2 grid-cols-2 ml-auto w-28">
				<p>L:{low.toFixed(0)}°</p>
				<p>H:{high.toFixed(0)}°</p>
			</div>
		</div>
	);
};
