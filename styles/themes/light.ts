import { Colors } from '../colors';
import { Typography } from '../typography';

export const lightTheme = {
  colors: {
    background: Colors.background.light,
    ...Colors.text,
  },
  font: {
    colors: {
      description: Colors.background.dark,
      placeholder: 'rgba(17, 0, 22, 0.5)',
    },
    ...Typography,
  },
  button: {
    primary: {
      bgLight: Colors.button.primary.light.from,
      bgDark: Colors.button.primary.light.to,
      text: Colors.text.button.primary,
      icon: Colors.text.button.primary,
    },
    secondary: {
      background: Colors.button.secondary.light,
      text: Colors.text.button.secondary.light,
      icon: Colors.text.button.secondary.light,
    },
    outlined: {
      outline: Colors.button.outlined.light,
      text: Colors.text.button.outlined.light,
      icon: Colors.text.button.outlined.light,
    },
    danger: {
      bgLight: Colors.button.danger.light.from,
      bgDark: Colors.button.danger.light.to,
      text: Colors.text.button.danger,
      icon: Colors.text.button.danger,
    },
  },

  input: {
    default: {
      background: 'rgba(0, 0, 0, 0.1)',
      outline: 'rgba(17, 0, 22, 1)',
    },
    success: {
      background: 'rgba(34, 197, 94, 0.1)',
      outline: 'rgba(34, 197, 94, 1)',
    },
    error: {
      background: 'rgba(239, 68, 68, 0.1)',
      outline: 'rgba(239, 68, 68, 1)',
    },
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;
