import { apiFetch } from '@/services/api';
import { WEATHERAPI_BASE_URL } from '@/services/constants';

/**
 * Fetches weather data based on the location input.
 *
 * The `location` parameter should be passed as a correctly formatted string.
 * Supported formats include:
 *
 * - City Name: e.g., `Paris`
 * - US Zip Code: e.g., `10001`
 * - UK Postcode: e.g., `SW1`
 * - Canada Postal Code: e.g., `G2J`
 * - Latitude and Longitude (decimal degree): e.g., `48.8567,2.3508`
 * - METAR Code: e.g., `metar:EGLL`
 * - IATA (Airport Code): e.g., `iata:DXB`
 * - Auto IP Lookup: `auto:ip`
 * - IP Address (IPv4 and IPv6 supported): e.g., `100.0.0.1`
 * - ID returned from Search API: e.g., `id:2801268`
 *
 * @param location - The location string in one of the supported formats.
 * @returns Promise<WeatherDataType>
 */
export const getWeather = async (location: string) => {
	return await apiFetch<WeatherDataType>(`/forecast.json`, {
		baseUrl: WEATHERAPI_BASE_URL,
		searchParams: {
			q: location,
			key: process.env.WEATHERAPI_API_KEY,
			days: '10',
			aqi: 'no',
			alerts: 'no',
		},
	});
};

export type WeatherDataType = {
	location: {
		name: string;
	};
	current: {
		temp_c: number;
		condition: {
			text: string;
			icon: string;
		};
		feelslike_c: number;
	};
	forecast: {
		forecastday: ForecastDayType[];
	};
};

export type ForecastDayType = {
	date: string;
	day: {
		maxtemp_c: number;
		mintemp_c: number;
		daily_chance_of_rain: number;
		condition: {
			text: string;
			icon: string;
		};
	};
	hour: HourlyWeatherType[];
};

export type HourlyWeatherType = {
	time: string;
	temp_c: number;
	condition: {
		text: string;
		icon: string;
	};
};
