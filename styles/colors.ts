export const Colors = {
  primary: "rgba(129, 12, 168, 1)",
  light: "rgba(193, 71, 233, 1)",
  dark: "rgba(45, 3, 59, 1)",
  background: {
    light: "rgba(252, 243, 255, 1)",
    dark: "rgba(17, 0, 22, 1)",
  },
  button: {
    primary: {
      light: {
        from: "rgba(193, 71, 233, 1)",
        to: "rgba(129, 12, 168, 1)",
      },
      dark: {
        from: "rgba(169, 62, 204, 1)",
        to: "rgba(78, 7, 102, 1)",
      },
    },
    danger: {
      light: {
        from: "rgba(233, 71, 71, 1)",
        to: "rgba(168, 12, 12, 1)",
      },
      dark: {
        from: "rgba(204, 62, 62, 1)",
        to: "rgba(102, 7, 7, 1)",
      },
    },
    secondary: {
      light: "rgba(98, 78, 104, 0.2)",
      dark: "rgba(191, 152, 204, 0.2)",
    },
    outlined: {
      light: "rgba(17, 0, 22, 1)",
      dark: "rgba(252, 243, 255, 1)",
    },
  },
  text: {
    special: "rgba(129, 12, 168, 1)",
    heading: {
      light: "rgba(17, 0, 22, 1)",
      dark: "rgba(252, 243, 255, 1)",
    },
    body: {
      light: "rgba(109, 69, 120, 1)",
      dark: "rgba(214, 158, 230, 1)",
    },
    button: {
      primary: "rgba(252, 243, 255, 1)",
      danger: "rgba(255, 223, 223, 1)",
      secondary: {
        light: "rgba(17, 0, 22, 1)",
        dark: "rgba(249, 230, 255, 1)",
      },
      outlined: {
        light: "rgba(17, 0, 22, 1)",
        dark: "rgba(252, 243, 255, 1)",
      },
    },
  },
} as const;
