import React from "react";

import { Container, LogOutButton, LogOutButtonText, Text } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Text>Essa tela é caso esteja autenticado</Text>

      <LogOutButton>
        <LogOutButtonText>Sair</LogOutButtonText>
      </LogOutButton>
    </Container>
  );
};

export { HomeScreen };
