import React, { ComponentType } from 'react';

type DailyForecastDataType = {
	day: string;
	high: number;
	low: number;
	icon: string;
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
		<div
			className={
				'text-white rounded-xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 mt-2'
			}
		>
			<p className={'font-semibold text-sm text-white/85'}>10-day forecast</p>

			<div className={'mt-2'}>
				{dailyForecastData.map((forecast, index) => (
					<DailyForecastItem key={index} {...forecast} />
				))}
			</div>
		</div>
	);
};
