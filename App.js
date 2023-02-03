import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store/store";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
