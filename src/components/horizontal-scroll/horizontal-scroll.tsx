'use client';
import React, { ComponentRef, PropsWithChildren, useEffect, useRef } from 'react';

type HorizontalScrollProps = {
	className?: string;
};

export const HorizontalScroll = ({
	children,
	className,
}: PropsWithChildren<HorizontalScrollProps>) => {
	const elRef = useRef<ComponentRef<'div'> | null>(null);

	useEffect(() => {
		const el = elRef.current;
		if (el) {
			const onWheel = (event: WheelEvent) => {
				if (event.deltaY == 0) return;
				event.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + event.deltaY,
					behavior: 'smooth',
				});
			};
			el.addEventListener('wheel', onWheel);
			return () => el.removeEventListener('wheel', onWheel);
		}
	}, []);

	return (
		<div ref={elRef} className={className}>
			{children}
		</div>
	);
};
