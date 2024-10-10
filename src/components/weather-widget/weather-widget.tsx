import { Card } from '@/components/ui/card';
import { CurrentTemperatureDisplay } from '@/components/weather-widget/components/current-temperature-display/current-temperature-display';
import {DailyForecast} from "@/components/weather-widget/components/daily-forecast/daily-forecast";
import {
	HourlyForecastItem
} from "@/components/weather-widget/components/hourly-forecast/components/hourly-forecast-item";
import { HourlyForecast } from '@/components/weather-widget/components/hourly-forecast/hourly-forecast';
import {getGeolocation} from "@/services/geolocation";
import {getWeather, WeatherDataType} from "@/services/weather";
import { format, isAfter, isSameHour } from 'date-fns';
import React from 'react';

const normalizeTemperatureDisplayData = (weather: WeatherDataType) => {

	return {
		location: weather.location.name,
		temperature: weather.current.temp_c,
		weather: weather.current.condition.text,
		high: weather.forecast.forecastday[0].day.maxtemp_c,
		low: weather.forecast.forecastday[0].day.mintemp_c,
	}
}

const normalizeHourlyForecastData = (weather: WeatherDataType) => {
	const currentDate = new Date();

	return weather.forecast.forecastday[0].hour
		.filter(hour => {
			const hourDate = new Date(hour.time);
			return isSameHour(currentDate, hourDate) || isAfter(hourDate, currentDate);
		})
		.map(hour => {
			const hourDate = new Date(hour.time);

			return {
				temperature: Math.round(hour.temp_c),
				time: isSameHour(currentDate, hourDate) ? 'Now' : format(hourDate, 'HH'),
				icon: 'https://' + hour.condition.icon,
			};
		});
}

export const WeatherWidget = async () => {

	const {data: location} = await getGeolocation()
	const { data: weather } = await getWeather(`${location?.latitude},${location?.longitude}` || 'Kyiv');

	if(!weather) return null

	const temperatureDisplayData = normalizeTemperatureDisplayData(weather);
	const hourlyForecastData = normalizeHourlyForecastData(weather);

	return (
		<Card
			className={
				'min-h-96 w-96 rounded-2xl backdrop-blur-md bg-[rgba(74,103,228,0.1)] p-3 text-white'
			}
		>
			<CurrentTemperatureDisplay
				{...temperatureDisplayData}
			/>
			<HourlyForecast
				hourlyForecastData={hourlyForecastData}
				HourlyForecastItem={HourlyForecastItem}
			/>
			<DailyForecast/>
		</Card>
	);
};
