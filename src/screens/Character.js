import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function Character({ navigation, route }) {
  const { name, species } = route.params;
  return (
    <SafeAreaView>
      <View className="items-center justify-center">
        <Text className="text-lg text-black/60 dark:text-white/70">{name}</Text>
        <Text className="text-lg text-black/60 dark:text-white/70">
          {species}
        </Text>
      </View>
    </SafeAreaView>
  );
}
