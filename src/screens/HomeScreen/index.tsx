import React from "react";

import Auth from "@react-native-firebase/auth";

import { Container, LogOutButton, LogOutButtonText, Text } from "./styles";

const HomeScreen: React.FC = () => {
  const handleSignOut = () => {
    Auth().signOut();
  };

  return (
    <Container>
      <Text>Essa tela é caso esteja autenticado</Text>

      <LogOutButton onPress={() => handleSignOut()}>
        <LogOutButtonText>Sair</LogOutButtonText>
      </LogOutButton>
    </Container>
  );
};

export { HomeScreen };
