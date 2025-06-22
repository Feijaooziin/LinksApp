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
import { Option } from "@/components/option";
import { router } from "expo-router";
import { useState } from "react";
import { categories } from "@/utils/categories";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("./add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />

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

      <Modal transparent visible={false}>
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

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
