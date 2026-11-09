/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-dark': 'var(--bg-dark)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-light': 'var(--text-light)',
        line: 'var(--line)',
        'line-dark': 'var(--line-dark)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Bodoni Moda', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        theme: '750ms',
      },
    },
  },
  plugins: [],
};
