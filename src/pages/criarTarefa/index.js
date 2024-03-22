import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import { supabase } from "../../services/supabase";
import { Session } from "@supabase/supabase-js";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CriarTarefa() {
  const [assignee, setAssignee] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [client, setClient] = useState("");
  const [horario, setHorario] = useState("");
  const [task, setTask] = useState("");
  const [usernames, setUsernames] = useState([]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  useEffect(() => {
    fetchUsernames();
  }, []);

  async function fetchUsernames() {
    try {
      const { data: usernamesData, error } = await supabase
        .from("profiles")
        .select("username");
      if (error) {
        throw error;
      }
      setUsernames(usernamesData.map((user) => user.username) || []);
    } catch (error) {
      Alert.alert("Erro ao recuperar usernames:", error.message);
    }
  }

  async function addTask() {
    try {
      const { data, error } = await supabase.from("tasks").insert({
        assignee,
        date: selectedDate,
        location,
        client,
        horario,
        task,
      });
      if (error) {
        throw error;
      }
      setAssignee("");
      setDate("");
      setLocation("");
      setClient("");
      setHorario("");
      setTask("");
      Alert.alert("Sucesso", "Tarefa criada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error.message);
      Alert.alert(
        "Erro",
        "Erro ao adicionar tarefa. Por favor, tente novamente."
      );
    }
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  console.log(selectedDate);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={dismissKeyboard}>
        <View style={styles.content}>
          <Header />
          <Text style={styles.title}>Adicione uma nova tarefa</Text>
          <Picker
            selectedValue={assignee}
            style={styles.picker}
            onValueChange={(itemValue) => setAssignee(itemValue)}
          >
            <Picker.Item label="Selecione o responsável" value="" />
            {usernames.map((username, index) => (
              <Picker.Item key={index} label={username} value={username} />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Data"
            placeholderTextColor="black"
            value={selectedDate.toLocaleDateString()}
            editable={false}
            onTouchStart={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Onde"
            placeholderTextColor="black"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Cliente"
            value={client}
            placeholderTextColor="black"
            onChangeText={(text) => setClient(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Horário"
            value={horario}
            placeholderTextColor="black"
            onChangeText={(text) => setHorario(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tarefa"
            value={task}
            placeholderTextColor="black"
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={addTask} style={styles.addButton}>
            <Text style={styles.buttonText}>Adicionar Tarefa</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
