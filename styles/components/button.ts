import { StyleSheet } from "react-native-unistyles";

export const ButtonStyles = StyleSheet.create((theme) => ({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    paddingHorizontal: 24,
    height: 56,
    gap: 8,
    borderRadius: 8,
    variants: {
      borderColor: {
        primary: {
          borderColor: "transparent",
          borderWidth: 0,
        },
        danger: {
          borderColor: "transparent",
          borderWidth: 0,
        },
        secondary: {
          borderColor: "transparent",
          borderWidth: 0,
        },
        outlined: {
          borderColor: theme.button.outlined.outline,
          borderWidth: 1,
        },
      },
    },
  },

  buttonText: {
    fontFamily: "Lufga-Medium",
    fontSize: 16,
    variants: {
      color: {
        primary: {
          color: theme.button.primary.text,
        },
        danger: {
          color: theme.button.danger.text,
        },
        secondary: {
          color: theme.button.secondary.text,
        },
        outlined: {
          color: theme.button.outlined.text,
        },
      },
    },
  },
}));
