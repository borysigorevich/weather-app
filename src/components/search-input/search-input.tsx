'use client';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, { ComponentRef, useRef, useState } from 'react';
import {useDebouncedCallback} from "use-debounce";

type LocationInputProps = {
	className?: string;
	query: string
	placeholder: string
};

export const SearchInput = ({ className, query, placeholder }: LocationInputProps) => {

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const containerRef = useOutsideClick(() => setActive(false));
	const inputRef = useRef<ComponentRef<'input'>>(null);

	const [active, setActive] = useState<boolean | null>(null);

	const handleActive = async () => {
		setActive(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		inputRef.current?.focus();
	};

	const handleSearch = useDebouncedCallback((inputValue: string) =>{
		const params = new URLSearchParams(searchParams);
		if (inputValue) {
			params.set(query, inputValue);
		} else {
			params.delete(query);
		}
		replace(`${pathname}?${params.toString()}`);
	}, 400)

	return (
		<div className={cn('relative z-[100]', className)} ref={containerRef}>
			<Search
				className={
					'absolute top-1/2 left-2 -translate-y-1/2 z-50 text-white cursor-pointer'
				}
				onClick={handleActive}
			/>
			<input
				ref={inputRef}
				type="text"
				placeholder={placeholder}
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get(query)?.toString()}
				className={cn(
					'p-2 pl-9 rounded-full border-none backdrop-blur-md bg-main outline-none text-white w-10 scale-0 placeholder:text-white/65',
					{
						'animate-grow': active,
						'animate-shrink': active === false,
					}
				)}
			/>
		</div>
	);
};
