import { Card } from '@/components/ui/card';
import {Divider} from "@/components/ui/divider";
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
				'text-white rounded-xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 border-none overflow-auto'
			}
		>
			<div className={'group-has-[[data-4x2]]/container:grid grid-cols-[repeat(auto-fit,minmax(26.05px,1fr))] flex gap-4 items-center'}>
				{hourlyForecastData.map((forecast, index) => (
					<HourlyForecastItem key={index} {...forecast} />
				))}
			</div>
		</Card>
	);
};
