import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/links";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3", "4", "5"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Youtubezin da Massa"
            url="https://youtube.com.br"
            onDetails={() => Alert.alert("FOI", "Deu certo pô!")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContents}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
