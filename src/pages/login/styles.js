import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
    gap: 20,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    height: 300,
    width: 350,
  },
  mt20: {
    marginTop: 20,
    gap: 20,
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
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 20,
  },
});
