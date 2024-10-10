import { WeatherWidget } from '@/components/weather-widget/weather-widget';

export default function Home() {
	return (
		<div className="h-full grid place-items-center bg-teal-200 remove-scrollbar">
			<WeatherWidget />
		</div>
	);
}
