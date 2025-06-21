import {
  View,
  TextInput,
  TextInputProps,
  Pressable,
  PressableProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import styles from "./style";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}
