import "react-native-url-polyfill/auto";
import { MyStack } from "./src/routes/stackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { supabase } from "./src/services/supabase";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error.message);
        return;
      }
      setSession(sessionData?.session || null);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    if (
      authListener &&
      authListener.subscription &&
      authListener.subscription.unsubscribe
    ) {
      authListener.subscription.unsubscribe();
    }

    return () => {
      if (
        authListener &&
        authListener.subscription &&
        authListener.subscription.unsubscribe
      ) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  return (
    <SafeAreaProvider>
      <MyStack session={session} />
    </SafeAreaProvider>
  );
}
