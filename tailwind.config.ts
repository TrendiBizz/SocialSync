import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"], // Enable class-based dark mode
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { // Optional: Add container centering
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: { // Map CSS vars to Tailwind color names
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(Gotvar(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent it.

---

**File 2 of 11: `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"], // Enable class-based dark mode
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { // Optional: Add container centering
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: { // Map CSS vars to Tailwind color names
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: { // Map CSS var to Tailwind radius names
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
       keyframes: { // Copied from shadcn/ui setup for potential use
         "accordion-down": {
           from: { height: "0" },
           to: { height: "var(--radix-accordion-content-height)" },
         },
         "accordion-up": {
           from: { height: "var(--radix-accordion-content-height)" },
           to: { height: "0" },
         },
       },
       animation: { // Copied from shadcn/ui setup for potential use
         "accordion-down": "accordion-down 0.2s ease-out",
         "accordion-up": "accordion-up 0.2s ease-out",
       },
    }
  },
  plugins: [require('tailwindcss-animate')] // Ensure plugin is included
};

export default config;