import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Alert, FlatList } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../services/supabase";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const { data: tasks, error } = await supabase.from("tasks").select("*");
      if (error) {
        throw error;
      }

      const sortedTasks = tasks.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setTasks(sortedTasks || []);
    } catch (error) {
      Alert.alert("Erro ao recuperar tarefas:", error.message);
    }
  }

  async function deleteTask(taskId) {
    try {
      const { error } = await supabase.from("tasks").delete().eq("id", taskId);
      if (error) {
        throw error;
      }
      Alert.alert("Tarefa excluída com sucesso");
      fetchTasks();
    } catch (error) {
      Alert.alert("Erro ao excluir tarefa:", error.message);
    }
  }

  async function completeTask(taskId) {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .update({ status: true })
        .eq("id", taskId);
      if (error) {
        throw error;
      }
      Alert.alert("Tarefa finalizada com sucesso");
      fetchTasks();
    } catch (error) {
      Alert.alert("Erro ao finalizar tarefa:", error.message);
    }
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.taskItem}>
      <Text style={styles.textTitle}>
        Tarefa: <Text style={styles.taskTitle}>{item.task}</Text>
      </Text>
      <Text style={styles.text}>Cliente: {item.client}</Text>
      <Text style={styles.text}>
        Criada: {new Date(item.created_at).toLocaleString()}
      </Text>
      <Text style={styles.text}>Quem irá realizar: {item.assignee}</Text>
      <Text style={styles.text}>Quando: {item.date || "N/A"}</Text>

      {item.observacao && (
        <Text style={styles.text}>Observação: {item.observacao}</Text>
      )}

      <View style={styles.spacebuttons}>
        <TouchableOpacity
          onPress={() => deleteTask(item.id)}
          style={styles.buttonApagar}
        >
          <Text style={styles.textButton}>Apagar</Text>
          <EvilIcons name="trash" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditarTarefa", { taskId: item.id })
          }
          style={styles.buttonEditar}
        >
          <Text style={styles.textButton}>Editar</Text>
          <Ionicons name="pencil" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => completeTask(item.id)}
        style={styles.buttonFinalizar}
      >
        <Text style={styles.textButton}>Finalizar</Text>
        <Ionicons name="checkmark-done-circle" size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const handleRefresh = () => {
    setRefreshing(true);
    fetchTasks();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Text style={styles.title}>Lista de Tarefas</Text>
        <TouchableOpacity
          style={styles.addButtonTask}
          onPress={() => navigation.navigate("CriarTarefa")}
        >
          <Text style={styles.textButton}>Adicionar Tarefa</Text>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
        <FlatList
          data={tasks.filter((task) => !task.status)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.taskList}
          showsVerticalScrollIndicator={false}
          onRefresh={handleRefresh}
          refreshing={refreshing}
        />
      </View>
    </SafeAreaView>
  );
}
