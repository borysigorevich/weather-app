import { Card } from '@/components/ui/card';
import { CurrentTemperatureDisplay } from '@/components/weather-widget/components/current-temperature-display';
import React from 'react';

export const WeatherWidget = () => {
	return (
		<Card
			className={
				'h-72 w-72 rounded-2xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 text-white'
			}
		>
			<CurrentTemperatureDisplay />
		</Card>
	);
};
