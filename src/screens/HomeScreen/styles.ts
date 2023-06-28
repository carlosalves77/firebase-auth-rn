import styled from "styled-components/native";

import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === "android" ? 24 : 0}px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const LogOutButton = styled.TouchableOpacity`
  width: 60%;
  height: 60px;
  margin-top: 20px;
  background-color: orange;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

export const LogOutButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
