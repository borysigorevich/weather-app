import { detectDeviceType } from '@/lib/detectDeviceType';
import { cn } from '@/lib/utils';
import React from 'react';

export const WeatherWidgetSkeleton = () => {
	const deviceType = detectDeviceType();

	const isMobile = deviceType === 'mobile';

	return (
		<div
			className={cn(
				'rounded-2xl h-full animate-pulse bg-slate-400 w-[calc(100vw-16px)] max-w-[40rem] @xs:h-80 @2xl:h-160 mx-auto',
				{
					'h-80': isMobile,
					'h-160': !isMobile,
				}
			)}
		/>
	);
};
