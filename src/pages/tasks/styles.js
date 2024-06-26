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
    flex: 1,
    alignItems: "center",
  },
  taskTitle: {
    color: colors.third,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    textAlign: "justify",
  },
  textTitle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    textAlign: "justify",
  },
  title: {
    color: colors.third,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  textButton: { fontSize: 16, color: colors.text, fontWeight: "bold" },
  addButtonTask: {
    borderRadius: 5,
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
  username: {
    fontSize: fonts.lg,
    fontWeight: "bold",
    marginLeft: 20,
    color: colors.primary,
  },
  addButton: {
    color: colors.black,
    fontSize: 20,
  },
  taskItem: {
    height: "auto",
    minWidth: "90%",
    maxWidth: "99%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.third,
  },
  taskList: {
    flexGrow: 1,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    marginRight: 10,
    marginBottom: 2,
    marginTop: 2,
    width: "100%",
  },
  buttonApagar: {
    borderRadius: 5,
    backgroundColor: "#9A031E",
    padding: 5,
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 3,
    marginTop: 10,
  },
  buttonEditar: {
    borderRadius: 5,
    backgroundColor: "#172774",
    padding: 5,
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 3,
    marginTop: 10,
  },
  buttonFinalizar: {
    borderRadius: 5,
    backgroundColor: "#416D19",
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 3,
    marginTop: 10,
  },
  spacebuttons: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});
