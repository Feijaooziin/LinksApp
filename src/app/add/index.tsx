import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    if (!category) {
      Alert.alert(
        "CATEGORIA:",
        "Selecione uma categoria para salvar o link meu nobre."
      );
    }
    if (!url.trim()) {
      Alert.alert("URL:", "Cadê o link meu parceiro?");
    }
    if (!name.trim()) {
      Alert.alert("NOME:", "Sem o nome fica difícil né meu chapa!");
    }

    console.log({ category, name, url });
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
        <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
