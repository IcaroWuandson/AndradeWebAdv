import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { supabase } from "../../services/supabase";
import { Session } from "@supabase/supabase-js";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditarTarefa() {
  const [observacao, setObservacao] = useState("");
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const route = useRoute();
  const navigation = useNavigation();
  const { taskId } = route.params;

  useEffect(() => {
    fetchTask();
  }, []);

  async function fetchTask() {
    try {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", taskId);
      if (error) {
        throw error;
      }
      if (tasks.length === 0) {
        throw new Error("Tarefa não encontrada");
      }
      setObservacao(tasks[0].observacao);
      setClient(tasks[0].client);
      setDate(tasks[0].date);
      setLocation(tasks[0].location);
    } catch (error) {
      Alert.alert("Erro ao carregar tarefa:", error.message);
      navigation.goBack();
    }
  }

  async function updateTask() {
    try {
      const { error } = await supabase
        .from("tasks")
        .update({ observacao })
        .eq("id", taskId);
      if (error) {
        throw error;
      }
      Alert.alert("Tarefa atualizada com sucesso");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao atualizar tarefa:", error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Editar Tarefa</Text>
        <View style={styles.infosTask}>
          <Text style={styles.text}>Cliente: {client}</Text>
          <Text style={styles.text}>Data: {date}</Text>
          <Text style={styles.text}>Local: {location}</Text>
        </View>
        <TextInput
          style={styles.input}
          value={observacao}
          onChangeText={setObservacao}
          placeholder="Digite a nova observação da tarefa"
        />
        <TouchableOpacity onPress={updateTask} style={styles.addButton}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
