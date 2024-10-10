import {
	DailyForecastItem
} from "@/components/weather-widget/components/daily-forecast/daily-forecast-item/daily-forecast-item";
import React from 'react';

export const DailyForecast = () => {
	return (
		<div
			className={
				'text-white rounded-xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 mt-2'
			}
		>
			<p className={'font-semibold text-sm text-white/85'}>10-day forecast</p>

			<div className={'mt-2'}>
				{[1, 2, 3, 4,5,6,7,8].map((item, index) => (
					<DailyForecastItem
						key={index}
						day={'Today'}
						high={Math.random() * 20 + 10}
						low={Math.random() * 10 + 5}
						icon={''}
					/>
				))}
			</div>
		</div>
	);
};
