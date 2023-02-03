import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useColorScheme } from "nativewind";

export default function Character({ route }) {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { name, species, created } = route.params;
  return (
    <SafeAreaView>
      <View className="w-full h-full items-center justify-center bg-gray-200 dark:bg-black">
        <Text className="text-lg text-black/60 dark:text-white/70">{name}</Text>
        <Text className="text-lg text-black/60 dark:text-white/70">
          {species}
        </Text>
        <Text className="text-lg text-black/60 dark:text-white/70">
          {created}
        </Text>
      </View>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
