import { Colors } from '../colors';
import { Typography } from '../typography';

export const darkTheme = {
  colors: {
    background: Colors.background.dark,
    ...Colors.text,
  },
  font: {
    colors: {
      description: Colors.background.light,
      placeholder: 'rgba(252, 243, 255, 0.5)',
    },
    ...Typography,
  },
  button: {
    primary: {
      bgLight: Colors.button.primary.dark.from,
      bgDark: Colors.button.primary.dark.to,
      text: Colors.text.button.primary,
      icon: Colors.text.button.primary,
    },
    secondary: {
      background: Colors.button.secondary.dark,
      text: Colors.text.button.secondary.dark,
      icon: Colors.text.button.secondary.dark,
    },
    outlined: {
      outline: Colors.button.outlined.dark,
      text: Colors.text.button.outlined.dark,
      icon: Colors.text.button.outlined.dark,
    },
    danger: {
      bgLight: Colors.button.danger.dark.from,
      bgDark: Colors.button.danger.dark.to,
      text: Colors.text.button.danger,
      icon: Colors.text.button.danger,
    },
  },

  input: {
    default: {
      background: 'rgba(255, 255, 255, 0.1)',
      outline: 'rgba(252, 243, 255, 1)',
    },
    success: {
      background: 'rgba(71, 252, 138, 0.1)',
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
