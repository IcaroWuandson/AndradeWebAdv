import { StyleSheet, Platform } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: Platform.OS === 'ios' ? 0 : 90,
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
    fontWeight: "bold"
  },
  viewCards: {
    height: 50,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
