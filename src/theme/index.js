import { Dimensions } from "react-native";

const colors = {
  white: "#FFFFFF",
  text: "#f7f7f7",
  black: "#111111",
  primary: "#976730",
  secondary: "#822c30",
  third: "#7c2e31",
  fourth: "#7c322f",
  inputs: "#E8E8E8",
  gray: "#454652",
  input: "#CBD5E1",
};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const fonts = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
};

const typography = {
  regular: "Helvetica Neue",
  bold: "HelveticaNeue-Bold",
  italic: "HelveticaNeue-Italic",
};

export const { height: screenHeight } = Dimensions.get("window");
export const { width: screenWigth } = Dimensions.get("window");

export { colors, breakpoints, fonts, typography };
