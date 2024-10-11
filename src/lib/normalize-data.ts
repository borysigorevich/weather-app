import { WeatherDataType } from '@/services/weather';
import { format, isAfter, isSameHour, isToday } from 'date-fns';

export const normalizeTemperatureDisplayData = (weather: WeatherDataType) => {
	return {
		location: weather.location.name,
		temperature: weather.current.temp_c,
		weather: weather.current.condition.text,
		high: weather.forecast.forecastday[0].day.maxtemp_c,
		low: weather.forecast.forecastday[0].day.mintemp_c,
	};
};

export const normalizeHourlyForecastData = (weather: WeatherDataType) => {
	const currentDate = new Date();

	const currentDayHours = weather.forecast.forecastday[0].hour;
	const nextDayHours = weather.forecast.forecastday[1].hour;

	return [...currentDayHours, ...nextDayHours]
		.filter((hour) => {
			const hourDate = new Date(hour.time);
			return isSameHour(currentDate, hourDate) || isAfter(hourDate, currentDate);
		})
		.map((hour) => {
			const hourDate = new Date(hour.time);

			return {
				temperature: Math.round(hour.temp_c),
				time: isSameHour(currentDate, hourDate) ? 'Now' : format(hourDate, 'HH'),
				icon: 'https://' + hour.condition.icon,
			};
		});
};

export const normalizeDailyForecastData = (weather: WeatherDataType) => {
	return weather.forecast.forecastday.slice(1).map((day) => ({
		day: isToday(new Date(day.date)) ? 'Today' : format(new Date(day.date), 'EEE'),
		high: Math.round(day.day.maxtemp_c),
		low: Math.round(day.day.mintemp_c),
		icon: 'https://' + day.day.condition.icon,
		weather: day.day.condition.text,
	}));
};
