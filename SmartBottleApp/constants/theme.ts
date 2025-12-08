export const colors = {
  lightBackground: '#f5f5f5',
  darkBackground: '#121212',
  primary: '#007AFF',
  secondary: '#1e90ff',
  textLight: '#ffffff',
  textDark: '#000000',
};

export const fonts = {
  regular: 'System',
  dyslexic: 'OpenDyslexic-Regular', 
};

export const fontSizes = {
  normal: 16,
  large: 20,
};

export interface ThemeSettings {
  darkMode: boolean;
  dyslexicFont: boolean;
  largeFont: boolean;
}