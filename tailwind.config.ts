import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // CASPER Atlas Warm Theme Colors
        'casper-warm': {
          50: '#fdf7e9',
          100: '#faedd3',
          200: '#f2e4cf',
          300: '#e8d7b2',
          400: '#d4be9a',
          500: '#b99f67',
          600: '#9a8148',
          700: '#7b6b3d',
          800: '#5e5632',
          900: '#433e28',
        },
        // CASPER Accent Colors
        'amber-warm': '#f7a229',
        'amber-deep': '#e9803d',
        'brown-muted': 'rgba(102, 79, 54, 0.78)',
        'brown-subtle': 'rgba(120, 88, 60, 0.55)',
        'brown-border': 'rgba(198, 142, 84, 0.32)',
        'brown-glass': 'rgba(194, 146, 104, 0.28)',
        'cream-light': 'rgba(255, 248, 234, 0.68)',
        'cream-deep': 'rgba(242, 212, 176, 0.7)',
        'orange-glow': 'rgba(250, 204, 21, 0.55)',
        'yellow-glow': 'rgba(249, 115, 22, 0.45)',
        // LegacyAI brand colors (keep for compatibility)
        'legacy-orange': '#FF6B35',
        'legacy-blue': '#3B82F6',
        'legacy-dark': '#0A0E1B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float-animation': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  borderRadius: {
    'casper': '24px',
  },
  plugins: [],
}

export default config
