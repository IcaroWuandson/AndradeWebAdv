import { StyleSheet, Platform } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: Platform.OS === "ios" ? 0 : 70,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: fonts.xl,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
  username: {
    fontSize: fonts.lg,
    fontWeight: "bold",
    marginLeft: 20,
    color: colors.primary,
  },
  text: {
    color: colors.black,
    fontSize: 20,
  },
  input: {
    height: 40,
    width: "95%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: colors.third,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    color: colors.third,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  viewCards: {
    height: 200,
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  addButton: {
    borderRadius: 5,
    backgroundColor: colors.secondary,
    padding: 10,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: colors.text },
  picker: {
    height: 14,
    width: "90%",
    paddingHorizontal: 10,
    marginBottom: Platform.OS === "ios" ? 200 : 30,
  },
});
