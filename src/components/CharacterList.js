import React from "react";
import { FlatList } from "react-native";
import { useGetCharactersQuery } from "../app/store/api-rtk";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const { data: characterListRKT } = useGetCharactersQuery();

  return (
    <>
      <FlatList
        data={characterListRKT?.results}
        keyExtractor={(characterListRKT) => characterListRKT.id}
        renderItem={({ item }) => <CharacterCard {...item} />}
      />
    </>
  );
}
