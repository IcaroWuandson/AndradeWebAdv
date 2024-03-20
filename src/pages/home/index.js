import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Fontisto, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.header}>Bem-vindo!</Text>
        </View>
        <Header />

        <TouchableOpacity
          style={styles.viewCards}
          onPress={() => navigation.navigate("Clientes")}
        >
          <Text style={styles.text}>Clientes</Text>
          <Fontisto name="persons" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.viewCards}
          onPress={() => navigation.navigate("Tasks")}
        >
          <Text style={styles.text}>Tarefas</Text>
          <FontAwesome5 name="tasks" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.viewCards}
          onPress={() => navigation.navigate("Documentos")}
        >
          <Text style={styles.text}>Documentos</Text>
          <Ionicons name="document" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
