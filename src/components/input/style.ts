import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.gray[900],
    borderRadius: 8,
    borderWidth: 1,
    borderBlockColor: colors.gray[800],
    padding: 10,
    color: colors.gray[100],
    fontSize: 16,
  },
});

export default styles;
