/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            maxWidth: "1200px",
        },
        extend: {
            colors: {
                primary: "#DC4298",
                main: "#230F0F",
            },
            fontFamily: {
                sans: ["Maven Pro", "sans-serif"],
            },
        },
    },
    plugins: [],
};
