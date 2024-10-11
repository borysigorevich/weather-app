'use client';

import {cn} from "@/lib/utils";
import React, { PropsWithChildren, useState } from 'react';

type SizeType = '2x2' | '4x2' | '4x4';

export const DynamicContainer = ({ children }: PropsWithChildren) => {
	const [size, setSize] = useState<SizeType>('2x2');

	return (
		<div className={'group/container'}>
			<div
				data-2x2={size === '2x2' ? '' : undefined}
				data-4x2={size === '4x2' ? '' : undefined}
				data-4x4={size === '4x4' ? '' : undefined}
				className={cn('@container', {
					'w-80 h-80': size === '2x2',
					'w-160 h-80': size === '4x2',
					'w-160 h-160': size === '4x4',
				})}
			>
				{children}
			</div>
		</div>
	);
};
