import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CharacterCard({ name, species, image }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-4 my-2"
      onPress={() => navigation.navigate("Character", { name, species })}
    >
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-lg font-semibold text-black/60 dark:text-white/70">
          {name}
        </Text>
        <Text className="text-lg text-black/60 dark:text-white/70">
          {species}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
