'use client';

import { cn } from '@/lib/utils';
import React, {ComponentRef, PropsWithChildren, useEffect, useRef, useState} from 'react';

type SizeType = '2x2' | '4x2' | '4x4';

type DynamicContainerProps = {
	initialSize?: SizeType;
}

export const DynamicContainer = ({ children, initialSize = '4x4' }: PropsWithChildren<DynamicContainerProps>) => {
	const [size, setSize] = useState<SizeType>(initialSize);

	const containerRef = useRef<ComponentRef<'div'> | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const width = entry.contentRect.width;

				if (width >= 640) {
					setSize('4x4');
				} else if (width > 510) {
					setSize('4x2');
				} else {
					setSize('2x2');
				}
			}
		});

		resizeObserver.observe(container);

		return () => {
			resizeObserver.unobserve(container);
		};
	}, []);

	return (
		<div className={'group/container relative px-2'}>
			<div
				ref={containerRef}
				data-2x2={size === '2x2' ? '' : undefined}
				data-4x2={size === '4x2' ? '' : undefined}
				data-4x4={size === '4x4' ? '' : undefined}
				className={cn('@container w-[calc(100vw-16px)] max-w-[40rem]', {
					'h-80': size === '2x2',
					'h-160': size === '4x4',
				})}
			>
				{children}
			</div>
		</div>
	);
};
