import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 22px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const FireBaseLogo = styled.Image`
  height: 100px;
  width: 100%;
`;

export const EmailInput = styled.TextInput`
  width: 100%;
  height: 50px;
  margin-top: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
`;

export const PasswordInput = styled.TextInput`
  width: 100%;
  height: 50px;
  margin-top: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 60%;
  height: 60px;
  margin-top: 20px;
  background-color: orange;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const SignUpButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: orange;
`;
