import { DynamicContainer } from '@/components/dynamic-container/dynamic-container';
import { Card } from '@/components/ui/card';
import { CurrentTemperatureDisplay } from '@/components/weather-widget/components/current-temperature-display/current-temperature-display';
import { DailyForecast } from '@/components/weather-widget/components/daily-forecast/daily-forecast';
import { DailyForecastItem } from '@/components/weather-widget/components/daily-forecast/daily-forecast-item/daily-forecast-item';
import { HourlyForecastItem } from '@/components/weather-widget/components/hourly-forecast/components/hourly-forecast-item';
import { HourlyForecast } from '@/components/weather-widget/components/hourly-forecast/hourly-forecast';
import { detectDeviceType } from '@/lib/detectDeviceType';
import {
	normalizeDailyForecastData,
	normalizeHourlyForecastData,
	normalizeTemperatureDisplayData
} from "@/lib/normalizeData";
import { getGeolocation } from '@/services/geolocation';
import { getWeather } from '@/services/weather';
import React from 'react';

export const WeatherWidget = async () => {
	const { data: location } = await getGeolocation();
	const { data: weather } = await getWeather(
		`${location?.latitude},${location?.longitude}` || 'Kyiv'
	);

	if (!weather) return null;

	const temperatureDisplayData = normalizeTemperatureDisplayData(weather);
	const hourlyForecastData = normalizeHourlyForecastData(weather);

	const deviceType = detectDeviceType();

	return (
		<DynamicContainer initialSize={deviceType === 'mobile' ? '2x2' : '4x4'}>
			<Card
				className={
					'rounded-2xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 text-white w-full h-full overflow-hidden grid'
				}
			>
				<CurrentTemperatureDisplay {...temperatureDisplayData} />
				<div
					className={
						'grid group-has-[[data-4x2]]/container:grid-cols-2 gap-2 overflow-auto'
					}
				>
					<HourlyForecast
						hourlyForecastData={hourlyForecastData}
						HourlyForecastItem={HourlyForecastItem}
					/>
					<DailyForecast
						dailyForecastData={normalizeDailyForecastData(weather)}
						DailyForecastItem={DailyForecastItem}
					/>
				</div>
			</Card>
		</DynamicContainer>
	);
};
