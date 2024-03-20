import React, { useState } from "react";
import { Alert, View, TouchableOpacity, Text, TextInput } from "react-native";
import { supabase } from "../../services/supabase";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert("Muito obrigado por se cadastrar!");
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="seu@email.com"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Sua senha"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TouchableOpacity
          style={styles.buttonLogin}
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          <Text style={styles.textButton}>Resgistar </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
