import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";
import twAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(table|checkbox|form|spacer).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "var(--font-raleway)",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "input-stroke-color": "var(--input-stroke-color)",
        "primary-bg-color": "var(--primary-bg-color)",
        "secondary-bg-color": "var(--secondary-bg-color)",
        "success-bg-color": "var(--success-bg-color)",
        "success-text-color": "var(--success-text-color)",
        "danger-bg-color": "var(--danger-bg-color)",
        "option-bg-color": "var(--option-bg-color)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [twAnimate, nextui()],
} satisfies Config;
