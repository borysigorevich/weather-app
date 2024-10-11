import { ErrorBoundary } from '@/components/errors/ErrorBoundary/ErrorBoundary';
import {WeatherWidgetSkeleton} from "@/components/skeletons/weather-widget-skeleton/weather-widget-skeleton";
import { WeatherWidget } from '@/components/weather-widget/weather-widget';

export default function Home() {
	return (
		<div className="h-full grid place-items-center bg-teal-200 remove-scrollbar">
			<ErrorBoundary fallback={<WeatherWidgetSkeleton />}>
				<WeatherWidget />
			</ErrorBoundary>
		</div>
	);
}
