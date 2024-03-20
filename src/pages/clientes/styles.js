import { StyleSheet, Platform } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: Platform.OS === 'ios' ? 0 : 50,
    justifyContent: "center",
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
    height: "auto",
    minWidth: "95%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    paddingRight: 95,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.third,
  },
  flatlistContent: {
    flexGrow: 1,
  },
});
