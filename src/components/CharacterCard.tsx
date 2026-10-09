import { Card, Text } from "@chakra-ui/react";
import type { Character } from "../types/character";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card.Root variant="outline">
      <Card.Body>
        <Text>{character.fileName}</Text>
      </Card.Body>
    </Card.Root>
  );
}
