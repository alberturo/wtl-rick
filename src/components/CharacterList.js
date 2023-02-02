import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCharactersList } from "../features/rickandmorty/rickandmortySlice";
import CharacterCard from "./CharacterCard";

const urlCharacters = "https://rickandmortyapi.com/api/character";

export default function CharacterList() {
  const { list: characterList } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getData() {
      fetch(urlCharacters)
        .then((res) => res.json())
        .then((res) => dispatch(setCharactersList(res.results)));
    }
    getData();
  }, []);
  return (
    <>
      <FlatList
        data={characterList}
        keyExtractor={(characterList) => characterList.id}
        renderItem={({ item }) => (
          <CharacterCard {...item} initialNumToRender={10} />
        )}
      />
    </>
  );
}
