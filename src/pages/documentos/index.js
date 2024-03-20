import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Linking } from "react-native";
import { styles } from "./styles";
import { Session } from "@supabase/supabase-js";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Documentos() {
  const DocumentButton = ({ documentName, documentUrl }) => {
    const handlePress = () => {
      Linking.openURL(documentUrl);
    };

    return (
      <TouchableOpacity style={styles.viewCards}>
        <Text style={styles.text}>{documentName}</Text>
        <TouchableOpacity style={styles.addButtonTask} onPress={handlePress}>
          <Text style={styles.textButton}>Baixar Documento</Text>
          <AntDesign name="file1" size={18} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Text style={styles.header}>Lista de Documentos</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <DocumentButton
            documentName="Ficha de Atendimento"
            documentUrl="https://vssowmpkkjghbjfyyxpw.supabase.co/storage/v1/object/public/documentos/Ficha%20de%20Atendimento.docx?t=2024-03-14T17%3A35%3A31.457Z"
          />
          <DocumentButton
            documentName="Procuração"
            documentUrl="https://vssowmpkkjghbjfyyxpw.supabase.co/storage/v1/object/public/documentos/procuracao.docx?t=2024-03-14T17%3A39%3A00.049Z"
          />
          <DocumentButton
            documentName="Procuração menores de idade"
            documentUrl="https://vssowmpkkjghbjfyyxpw.supabase.co/storage/v1/object/public/documentos/procuracao%20menores.docx?t=2024-03-14T17%3A39%3A09.259Z"
          />
          <DocumentButton
            documentName="Procuração não-alfabetizados"
            documentUrl="https://vssowmpkkjghbjfyyxpw.supabase.co/storage/v1/object/public/documentos/procuracao%20nao%20alfabetizados.docx?t=2024-03-14T17%3A39%3A22.171Z"
          />
          <DocumentButton
            documentName="Contrato"
            documentUrl="https://vssowmpkkjghbjfyyxpw.supabase.co/storage/v1/object/public/documentos/contrato.docx?t=2024-03-14T17%3A39%3A34.331Z"
          />
          <DocumentButton
            documentName="Declaração de residência"
            documentUrl="https://vssowmpkkjghbjfyyxpw.supabase.co/storage/v1/object/public/documentos/DECLARAcAO%20DE%20RESIDENCIA.docx?t=2024-03-14T17%3A39%3A45.334Z"
          />
          <DocumentButton
            documentName="Termo de responsabilidade"
            documentUrl="https://vssowmpkkjghbjfyyxpw.supabase.co/storage/v1/object/public/documentos/TERMO%20DE%20RESPONSABILIDADE_procurador.pdf?t=2024-03-14T17%3A40%3A10.165Z"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
