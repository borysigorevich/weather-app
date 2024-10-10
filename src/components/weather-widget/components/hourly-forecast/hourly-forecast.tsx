import { Card } from '@/components/ui/card';
import React, { ComponentType, } from 'react';

type HourlyForecastDataType = {
	temperature: number;
	time: string;
	icon: string;
};

type HourlyForecastProps = {
	hourlyForecastData: HourlyForecastDataType[];
	HourlyForecastItem: ComponentType<HourlyForecastDataType>;
};

export const HourlyForecast = ({
	hourlyForecastData,
	HourlyForecastItem,
}: HourlyForecastProps) => {
	return (
		<Card
			className={
				'text-white rounded-xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 border-none overflow-hidden'
			}
		>
			<div className={'flex gap-4 items-center'}>
				{hourlyForecastData.map((forecast, index) => (
					<HourlyForecastItem key={index} {...forecast} />
				))}
			</div>
		</Card>
	);
};
