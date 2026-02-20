import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#006A4E", // IUML Green
                    dark: "#004d38",
                    light: "#008f6b",
                },
                secondary: {
                    DEFAULT: "#1e293b",
                    foreground: "#f8fafc",
                },
                accent: {
                    DEFAULT: "#FDB913", // Gold/Yellow
                    foreground: "#000000",
                },
            },
            fontFamily: {
                serif: ["var(--font-latin-modern)", "serif"],
                sans: ["var(--font-latin-modern)", "sans-serif"], // Force Latin Modern for everything as requested
            },
        },
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("@tailwindcss/typography")
    ],
};
export default config;
