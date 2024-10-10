import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { HourlyForecastItem } from '@/components/weather-widget/components/hourly-forecast/components/hourly-forecast-item';
import React from 'react';

export const HourlyForecast = () => {
	return (
		<Card
			className={
				'text-white rounded-xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 border-none'
			}
		>
			<h3 className={'text-xs font-semibold'}>
				Cloudy conditions expected around 23:00, with partly cloudy conditions at
				04:00
			</h3>
			<Divider />

			<div className={'flex gap-2 items-center'}>
				{[1, 2, 3, 4].map((item, index) => (
					<HourlyForecastItem
						key={index}
						temperature={14}
						time={'23:00'}
						icon={''}
					/>
				))}
			</div>
		</Card>
	);
};
