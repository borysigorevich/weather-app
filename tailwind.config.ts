import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
				main: 'rgba(74,103,228,0.1)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			width: {
				160: '40rem',
			},
			height: {
				160: '40rem',
			},
			containers: {
				'2xl': '40rem',
			},
			keyframes: {
				growAndScale: {
					'0%': {
						transform: 'scale(0)',
						width: '40px',
					},
					'50%': {
						transform: 'scale(1)',
						width: '40px',
					},
					'100%': {
						transform: 'scale(1)',
						width: '250px',
					},
				},
				shrinkAndReverseScale: {
					'0%': {
						transform: 'scale(1)',
						width: '250px',
					},
					'50%': {
						transform: 'scale(1)',
						width: '40px',
					},
					'100%': {
						transform: 'scale(0)',
						width: '40px',
					},
				},
			},
			animation: {
				grow: 'growAndScale 1s ease-in-out forwards',
				shrink: 'shrinkAndReverseScale 1s ease-in-out forwards',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/container-queries')],
};
export default config;
