import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
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

      <Modal transparent visible={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <View style={styles.closeModal}>
                <TouchableOpacity>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color={colors.gray[400]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.modalLinkName}>Youtube</Text>
            <Text style={styles.modalUrl}>https://youtube.com.br</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
