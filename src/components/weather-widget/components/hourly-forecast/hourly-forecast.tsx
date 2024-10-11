import {HorizontalScroll} from "@/components/horizontal-scroll/horizontal-scroll";
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
				'text-white rounded-xl backdrop-blur-md bg-main border-none overflow-hidden'
			}
		>
				<HorizontalScroll
					className={'group-has-[[data-4x2]]/container:grid grid-cols-[repeat(auto-fit,minmax(26.05px,1fr))] flex gap-4 items-center overflow-auto p-3 pb-0.5'}>
					{hourlyForecastData.map((forecast, index) => (
						<HourlyForecastItem key={index} {...forecast} />
					))}
				</HorizontalScroll>
		</Card>
	);
};
