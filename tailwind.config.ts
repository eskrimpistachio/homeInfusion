import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'testi-bg' : `url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402006/testi-bg_saogbd.png')`,
        'layanan-kami' : `url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1695401779/BGLayananKami_kc5s7h.png')`,
        'hero-mobile' : `url('/LandingIMG.png')`,
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "cust-pink": "#E1788D",
        "cust-white": "#FFFFFF",
        "cust-pinkMuda": "#EAA2B0",
        "cust-pinkTua": "#67464D",
        "cust-pinkButton": "#EBA3B1"
      }
    },
  },
  plugins: [],
}
export default config
