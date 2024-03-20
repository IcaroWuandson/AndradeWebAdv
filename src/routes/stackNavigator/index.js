import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../pages/home";
import Auth from "../../pages/login";
import Register from "../../pages/register";
import Clientes from "../../pages/clientes";
import Tasks from "../../pages/tasks";
import Documentos from "../../pages/documentos";
import CriarTarefa from "../../pages/criarTarefa";
import EditarTarefa from "../../pages/editarTarefa";
import DetalharCliente from "../../pages/detalharCliente";

import { supabase } from "../../services/supabase";
import PropTypes from "prop-types";

const Stack = createStackNavigator();

export function MyStack({ session: initialSession }) {
  const [session, setSession] = useState(initialSession);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();
      if (error) {
        return;
      }
      setSession(sessionData?.session || null);
    };

    fetchSession();

    const authListener = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      if (authListener && authListener.unsubscribe) {
        authListener.unsubscribe();
      }
    };
  }, []);

  const isLoggedIn = session && session.user;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "Home" : "Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {() => <Home key={session?.user?.id} session={session} />}
        </Stack.Screen>
        <Stack.Screen name="Perfil">
          {() => <Account key={session?.user?.id} session={session} />}
        </Stack.Screen>
        <Stack.Screen name="Login" component={Auth} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Clientes" component={Clientes} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Documentos" component={Documentos} />
        <Stack.Screen name="CriarTarefa" component={CriarTarefa} />
        <Stack.Screen name="EditarTarefa" component={EditarTarefa} />
        <Stack.Screen name="DetalharCliente" component={DetalharCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

MyStack.propTypes = {
  session: PropTypes.object,
};
