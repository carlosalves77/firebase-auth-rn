import React from "react";

import { SignInScreen } from "./src/screens/SignInScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SafeAreaView } from "react-native";

const App = () => {
  const user = false;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user ? <HomeScreen /> : <SignInScreen />}
    </SafeAreaView>
  );
};

export default App;
