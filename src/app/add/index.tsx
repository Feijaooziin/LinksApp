import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    try {
      if (category === "") {
        return Alert.alert(
          "CATEGORIA:",
          "Selecione uma categoria para salvar o link meu nobre."
        );
      }
      if (!url.trim()) {
        return Alert.alert("URL:", "Cadê o link meu parceiro?");
      }
      if (!name.trim()) {
        return Alert.alert("NOME:", "Sem o nome fica difícil né meu chapa!");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });
      Alert.alert("Sucesso!", "Link salvo meu Consagrado", [
        { text: "Ok", onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert("Erro!", "Deu erro, Jovem Alce.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma Categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input
          placeholder="URL"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
