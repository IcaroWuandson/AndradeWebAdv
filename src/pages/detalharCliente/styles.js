import { StyleSheet, Platform } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: Platform.OS === "ios" ? 0 : 50,
    alignItems: "center",
    flex: 1,
  },
  header: {
    fontSize: fonts.xl,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginRight: 10,
    width: "100%",
  },
  text: {
    color: colors.black,
    fontSize: 16,
    marginRight: 10,
    marginBottom: 2,
    marginTop: 2,
  },
  title: {
    color: colors.third,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  viewCards: {
    minWidth: "95%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    margin: 5,
    gap: 5,
  },
  viewCardsResponsavel: {
    minWidth: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    gap: 5,
  },
  flatlistContent: {
    flexGrow: 1,
  },
});
