import { cn } from '@/lib/utils';
import React from 'react';

type DividerProps = {
	className?: string;
};

export const Divider = ({ className }: DividerProps) => {
	return <div className={cn('w-full h-px bg-white/40 my-3', className)} />;
};
