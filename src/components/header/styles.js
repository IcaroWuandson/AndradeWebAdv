import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.white,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  logo: {
    height: 90,
    width: 250,
  },
  mt20: {
    marginTop: 20,
  },
  buttonLogin: {
    borderRadius: 30,
    backgroundColor: colors.secondary,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRegister: {
    borderRadius: 30,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
});
