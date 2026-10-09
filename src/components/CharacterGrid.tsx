import { Grid, Heading, Text } from "@chakra-ui/react";
import { characters } from "../data/characters";
import type { Character } from "../types/character";
import CharacterCard from "./CharacterCard";

type CharacterGridProps = {
  onSelectCharacter: (character: Character) => void;
};

export default function CharacterGrid({
  onSelectCharacter,
}: CharacterGridProps) {
  return (
    <>
      <Heading as="h1">キャラクター一覧</Heading>
      <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap="4px">
        {characters.map((character) => (
          <CharacterCard
            key={character.fileName}
            character={character}
            onSelect={onSelectCharacter}
          />
        ))}
      </Grid>
      {characters.length === 0 && <Text>モデルファイルがありません。</Text>}
    </>
  );
}
