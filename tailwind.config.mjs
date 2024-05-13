/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            backgroundImage: {
                'hero': "url('/src/assets/profile.jfif')",
            },
            colors: {
                'primary': {
                    light: '#F7F5F2',
                    DEFAULT: '#2F4858', // also dark 
                }, 
                'accent': {
                    light: '#CED0C8',
                    gray: '#A2ADA4', 
                    dark:'#4D6A6F',
                    bright: '#D4FEF6',
                },
            },
        },
	},
	plugins: [],
}
