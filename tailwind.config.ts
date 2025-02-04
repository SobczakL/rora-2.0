import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: "lato",
                latoSB: "latoSB"
            },
            screens: {
                sm: "425px",
                md: "768px",
                lg: "1100px",
            },
            colors: {
                backgroundD: '#020617',
                backgroundM: '#0F172A',
                backgroundL: '#1E293B',
                accent: '#F3A400',
                input: '#94A3B8',
                buttonLogin: '#334155',
                buttonPrimary: '#64748B',
                buttonSecondary: '#020617',
                cardPrimary: '#334155',
                cardSecondary: '#2A2A40',
                slate: '#D8DCE4'
            },
            borderRadius: {
                lg: '50px',
                md: '25px',
                sm: '15px'
            },
            fontSize: {
                bodyS: '14px',
                bodyM: '16px',
                bodyL: '18px',
                headerS: '26px',
                headerM: '32px',
                headerL: '34px',
                cardHeaderS: '20px',
                cardHeaderM: '22px',
                cardHeaderL: '24px',
                subheaderS: '26px',
                subheaderM: '28px',
                subheaderL: '30px',
                timeS: '11px',
                timeM: '13px',
                timeL: '15px'
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
