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

import auth from "@react-native-firebase/auth";

const imageUri =
  "https://firebase.google.com/static/images/brand-guidelines/logo-standard.png?hl=pt-br";

const SignInScreen: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("Esse endereço de e-mail já está em uso!");
        }
        if (error.code === "auth/invalid-email") {
          console.log("Endereço de e-mail inválido!");
        }
      });
  };

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log("Usuário logado!"))
      .catch((error) => {
        console.log(error);
      });
  };

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
      <LoginButton onPress={() => handleSignIn()}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
      <SignUpButton onPress={() => handleSignUp()}>
        <SignUpButtonText>Criar conta</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export { SignInScreen };
