import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Apple-inspired system colors
                system: {
                    gray: "#8E8E93",
                    blue: "#007AFF",
                    green: "#34C759",
                    indigo: "#5856D6",
                    orange: "#FF9500",
                    pink: "#FF2D55",
                    purple: "#AF52DE",
                    red: "#FF3B30",
                    teal: "#5AC8FA",
                    yellow: "#FFCC00",
                },
                glass: {
                    DEFAULT: "rgba(255, 255, 255, 0.7)",
                    dark: "rgba(28, 28, 30, 0.7)",
                }
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'apple-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
                'dock': '0 20px 40px rgba(0,0,0,0.1)',
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
};
export default config;
