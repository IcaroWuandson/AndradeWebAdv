import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

const DetalharCliente = ({ route }) => {
  const { cliente } = route.params;
  const documentosNecessarios = JSON.parse(cliente.documentosNecessarios);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Text style={styles.header}>Detalhes do Cliente</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewCards}>
            <Text style={styles.username}>Nome: {cliente.nome}</Text>
            <Text style={styles.text}>Profissão: {cliente.profissao}</Text>
            <Text style={styles.text}>Estado Civil: {cliente.estadoCivil}</Text>
            <Text style={styles.text}>RG: {cliente.rg}</Text>
            <Text style={styles.text}>CPF: {cliente.cpf}</Text>
            <Text style={styles.text}>
              Data de Nascimento: {cliente.dataNascimento}
            </Text>
            <Text style={styles.text}>CEP: {cliente.cep}</Text>
            <Text style={styles.text}>Logradouro: {cliente.logradouro}</Text>
            <Text style={styles.text}>Complemento: {cliente.complemento}</Text>
            <Text style={styles.text}>Bairro: {cliente.bairro}</Text>
            <Text style={styles.text}>Estado: {cliente.estado}</Text>
            <Text style={styles.text}>UF: {cliente.uf}</Text>
            <Text style={styles.text}>Nº: {cliente.numero}</Text>
            <Text style={styles.text}>Processo: {cliente.acao}</Text>
            <Text style={styles.text}>WhatsApp: {cliente.whatsapp}</Text>
            {cliente.telefone1 && (
              <Text style={styles.text}>Telefone 01: {cliente.telefone1}</Text>
            )}
            {cliente.telefone2 && (
              <Text style={styles.text}>Telefone 02: {cliente.telefone2}</Text>
            )}
            <Text style={styles.text}>
              Indicação: {cliente.foiIndicado ? "Sim" : "Não"}
            </Text>
            {cliente.indicacao && (
              <Text style={styles.text}>Indicado por: {cliente.indicacao}</Text>
            )}
            <Text style={styles.text}>Senha MEUINSS: {cliente.meuinss}</Text>
            <Text style={styles.text}>Beneficio: {cliente.beneficio}</Text>

            <Text style={styles.text}>
              Possui Responsável: {cliente.possuiResposavel ? "Sim" : "Não"}
            </Text>
            {cliente.possuiResposavel && (
              <View style={styles.viewCardsResponsavel}>
                {cliente.nomeResposavel && (
                  <Text style={styles.text}>
                    Nome do Responsável: {cliente.nomeResposavel}
                  </Text>
                )}
                {cliente.rgResposavel && (
                  <Text style={styles.text}>
                    RG do Responsável: {cliente.rgResposavel}
                  </Text>
                )}
                {cliente.cpfResposavel && (
                  <Text style={styles.text}>
                    CPF do Responsável: {cliente.cpfResposavel}
                  </Text>
                )}
              </View>
            )}
            <Text style={styles.text}>Documentos:</Text>
            {documentosNecessarios.map((documento, index) => (
              <Text key={index} style={styles.text}>
                - {documento}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetalharCliente;
