import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainStack from "./MainStack";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
