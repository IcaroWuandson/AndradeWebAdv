import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Alert, FlatList } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../../services/supabase";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const { data, error } = await supabase.from("clientes").select("*");
      if (error) {
        throw error;
      }
      setClientes(data);
    } catch (error) {
      Alert.alert("Erro ao buscar clientes", error.message);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchClientes().then(() => setRefreshing(false));
  };

  const navigateToDetalharCliente = (cliente) => {
    navigation.navigate("DetalharCliente", { cliente });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetalharCliente(item)}>
      <View style={styles.viewCards}>
        <Text style={styles.username}>{item.nome}</Text>
        <Text style={styles.text}>CPF: {item.cpf}</Text>
        <Text style={styles.text}>Processo: {item.acao}</Text>
        <Text style={styles.text}>WhatsApp: {item.whatsapp}</Text>
        {item.telefone1 && (
          <Text style={styles.text}>Telefone: {item.telefone1}</Text>
        )}
        <Text style={styles.text}>
          Indicação: {item.foiIndicado ? "Sim" : "Não"}
        </Text>
        {item.indicacao && (
          <Text style={styles.text}>Indicado por: {item.indicacao}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Text style={styles.title}>Lista de Clientes</Text>
        <FlatList
          data={clientes}
          renderItem={renderItem}
          keyExtractor={(item) => item.cpf.toString()}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          contentContainerStyle={styles.flatlistContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
