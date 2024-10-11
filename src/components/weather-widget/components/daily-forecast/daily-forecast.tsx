import { Card } from '@/components/ui/card';
import React, { ComponentType } from 'react';

type DailyForecastDataType = {
	day: string;
	high: number;
	low: number;
	icon: string;
	weather: string;
};

type DailyForecastProps = {
	dailyForecastData: DailyForecastDataType[];
	DailyForecastItem: ComponentType<DailyForecastDataType>;
};

export const DailyForecast = ({
	dailyForecastData,
	DailyForecastItem,
}: DailyForecastProps) => {
	return (
		<Card
			className={
				'text-white rounded-xl backdrop-blur-md bg-main p-3 pr-0.5 border-none overflow-auto'
			}
		>
			<p
				className={
					'hidden font-semibold text-sm text-white/85 group-has-[[data-4x4]]/container:block'
				}
			>
				10-day forecast
			</p>

			<div className={'group-has-[[data-4x4]]/container:mt-2  grid-cols-4 gap-2'}>
				{dailyForecastData.map((forecast, index) => (
					<DailyForecastItem key={index} {...forecast} />
				))}
			</div>
		</Card>
	);
};
