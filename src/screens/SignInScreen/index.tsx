import React from "react";

import {
  Container,
  EmailInput,
  FireBaseLogo,
  LoginButton,
  LoginButtonText,
  PasswordInput,
  SignUpButton,
  SignUpButtonText,
} from "./styles";

const imageUri =
  "https://firebase.google.com/static/images/brand-guidelines/logo-standard.png?hl=pt-br";

const SignInScreen: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <FireBaseLogo source={{ uri: imageUri }} />
      <EmailInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />
      <PasswordInput
        placeholder="Digite sua senha"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
      />
      <LoginButton>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
      <SignUpButton>
        <SignUpButtonText>Criar conta</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export { SignInScreen };
