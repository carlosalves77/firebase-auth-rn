import React from "react";
import { ActivityIndicator, View } from "react-native";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { SignInScreen } from "./src/screens/SignInScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SafeAreaView } from "react-native";

const App: React.FC = () => {
  const [initializing, setInitializing] = React.useState(true);

  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#000" size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user ? <HomeScreen /> : <SignInScreen />}
    </SafeAreaView>
  );
};

export default App;
