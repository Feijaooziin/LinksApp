import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38,
  },
});

export default styles;
