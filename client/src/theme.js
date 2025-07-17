// color design tokens export
export const colorTokens = {
  grey: {
    0: '#FFFFFF',
    10: '#FAFAFA',
    50: '#F5F5F7',
    100: '#E8E8ED',
    200: '#D1D1DB',
    300: '#B9B9C9',
    400: '#A2A2B7',
    500: '#8B8BA5',
    600: '#6C6C84',
    700: '#4D4D63',
    800: '#2E2E42',
    900: '#1A1A28',
    1000: '#0F0F1A',
  },
  primary: {
    // Modern purple-blue gradient (Instagram/Discord inspired)
    50: '#F0F4FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },
  secondary: {
    // Complementary warm pink/rose
    50: '#FFF1F2',
    100: '#FFE4E6',
    200: '#FECDD3',
    300: '#FDA4AF',
    400: '#FB7185',
    500: '#F43F5E',
    600: '#E11D48',
    700: '#BE123C',
    800: '#9F1239',
    900: '#881337',
  },
  accent: {
    // Modern teal for highlights and success states
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[300],
              main: colorTokens.primary[400],
              light: colorTokens.primary[700],
            },
            secondary: {
              dark: colorTokens.secondary[300],
              main: colorTokens.secondary[400],
              light: colorTokens.secondary[700],
            },
            accent: {
              dark: colorTokens.accent[300],
              main: colorTokens.accent[400],
              light: colorTokens.accent[700],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[1000],
              alt: colorTokens.grey[900],
              paper: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[100],
            },
            secondary: {
              dark: colorTokens.secondary[700],
              main: colorTokens.secondary[500],
              light: colorTokens.secondary[100],
            },
            accent: {
              dark: colorTokens.accent[700],
              main: colorTokens.accent[500],
              light: colorTokens.accent[100],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
              paper: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
