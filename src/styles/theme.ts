export const theme = {
  colors: {
    primary: '#4a9eff',
    secondary: '#4a9eff',
    background: '#1e1e1e',
    surface: '#2d2d2d',
    text: '#ffffff',
    textLight: '#cccccc',
    border: '#404040',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    react: '#4a9eff',
    accent: '#4a9eff',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      xxl: '32px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
};

export type Theme = typeof theme;