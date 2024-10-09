import { Card } from '@/components/ui/card';
import { CurrentTemperatureDisplay } from '@/components/weather-widget/components/current-temperature-display/current-temperature-display';
import { HourlyForecast } from '@/components/weather-widget/components/hourly-forecast/hourly-forecast';
import React from 'react';

export const WeatherWidget = () => {
	return (
		<Card
			className={
				'h-96 w-96 rounded-2xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 text-white'
			}
		>
			<CurrentTemperatureDisplay />
			<HourlyForecast />
		</Card>
	);
};
