import { StyleSheet, Platform } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: Platform.OS === "ios" ? 0 : 50,
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
    fontWeight: "bold",
  },
  viewCards: {
    height: 120,
    minWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  addButtonTask: {
    borderRadius: 40,
    marginTop: 5,
    backgroundColor: colors.secondary,
    padding: 10,
    minWidth: "90%",
    maxWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  textButton: { fontSize: 16, color: colors.text, fontWeight: "bold" },
});
