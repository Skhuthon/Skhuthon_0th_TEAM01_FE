import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    black_100: '#6a6c6a',
    black_200: '#6c6c72',
    black_300: '#232323',
    black: '#000000',
    gray_100: '#d9d9d9',
    gray_200: '#999999',
    gray_300: '#e5e5e5',
    brown_50: '#cdb3a1',
    brown_100: 'rgba(100,244,227,0.5)',
    brown_200: 'rgba(100, 244, 227, 0.7)',
    brown_300: '#64f4e37',
    white_100: '#f1f1f1',
    white_200: '#ffffff',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
  },

  size: {
    font_xs: '12px',
    font_sm: '14px',
    font_md: '16px',
    font_lg: '20px',
    font_xl: '24px',
    font_xxl: '32px',
  },
  weight: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
});
