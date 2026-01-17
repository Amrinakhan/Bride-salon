/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nude: '#F5EBE0',
                cream: '#FEFAE0',
                blush: '#FAD2E1',
                brown: {
                    light: '#8D6E63',
                    DEFAULT: '#6D4C41',
                    dark: '#4E342E',
                },
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
