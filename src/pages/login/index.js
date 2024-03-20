import React, { useState } from "react";
import {
  Alert,
  View,
  TouchableOpacity,
  Text,
  Image,
  Keyboard,
  TextInput,
} from "react-native";
import { supabase } from "../../services/supabase";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../../assets/logoAndrade.jpeg";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Ocorreu um erro, por favor tente novamente");
      setLoading(false);
    } else {
      navigation.navigate("Home");
    }
  }
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1 }} onPress={dismissKeyboard}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="seuemail@exemplo.com"
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="sua senha"
            autoCapitalize={"none"}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <TouchableOpacity
            style={styles.buttonLogin}
            disabled={loading}
            onPress={() => signInWithEmail()}
          >
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
