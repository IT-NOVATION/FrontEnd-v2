import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-main': '#AF35FE',
        'theme-lightBlack': '#323232',
        'theme-black': '#000000',
        'theme-white': '#FFFFFF',
        'theme-darkWhite': '#F8F8F8',
        'theme-lightGray': '#B3B3B3',
        'theme-gray': '#CCCCCC',
        'theme-darkGray': '#5F5F5F',
        'theme-red': '#FF5047',
        'theme-bgColor': '#3232328f',
        'theme-modalBg': '#00000099',
      },
    },

    fontSize: {
      title1: [
        '50px',
        {
          fontWeight: '350',
        },
      ],
      title2: [
        '30px',
        {
          fontWeight: '400',
        },
      ],
      title3: [
        '28px',
        {
          fontWeight: '500',
        },
      ],
      title4: [
        '24px',
        {
          fontWeight: '500',
        },
      ],
      title5: [
        '20px',
        {
          fontWeight: '500',
        },
      ],
      body1: [
        '20px',
        {
          fontWeight: '400',
        },
      ],
      body2: [
        '20px',
        {
          fontWeight: '350',
        },
      ],
      body3: [
        '16px',
        {
          fontWeight: '400',
        },
      ],
      body4: [
        '15px',
        {
          fontWeight: '400',
        },
      ],
      body5: [
        '12px',
        {
          fontWeight: '400',
        },
      ],
      body6: [
        '13px',
        {
          fontWeight: '350',
        },
      ],
    },
  },
  plugins: [],
};
export default config;
