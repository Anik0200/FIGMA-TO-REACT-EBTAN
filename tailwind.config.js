/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },

        extend: {
            colors: {
                primary: "#C51605",
            },

            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'ptSans': ['PT Serif', 'serif'],
            },
        },

    },
    plugins: [],
}
