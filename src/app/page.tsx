import { ErrorBoundary } from '@/components/errors/ErrorBoundary/ErrorBoundary';
import { SearchInput } from '@/components/search-input/search-input';
import { WeatherWidgetSkeleton } from '@/components/skeletons/weather-widget-skeleton/weather-widget-skeleton';
import { WeatherWidget } from '@/components/weather-widget/weather-widget';

export default function Home() {
	return (
		<div className="h-full grid place-items-center bg-teal-200 remove-scrollbar">
			<div className={'relative'}>
				<ErrorBoundary fallback={<WeatherWidgetSkeleton />}>
					<WeatherWidget />
				</ErrorBoundary>
				<SearchInput
					className="absolute -top-14 left-2"
					query="location"
					placeholder="Search for a location"
				/>
			</div>
		</div>
	);
}
