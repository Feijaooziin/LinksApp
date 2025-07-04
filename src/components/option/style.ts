import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    gap: 5,
  },
  primaryTitle: {
    color: colors.red[300],
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryTitle: {
    color: colors.gray[400],
    fontSize: 16,
  },
});

export default styles;
