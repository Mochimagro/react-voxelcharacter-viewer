import { Button } from "@chakra-ui/react";
import type { Character } from "../types/character";

type CharacterCardProps = {
  character: Character;
  onSelect: (character: Character) => void;
};

export default function CharacterCard({
  character,
  onSelect,
}: CharacterCardProps) {
  return (
    <Button
      type="button"
      variant="outline"
      width="100%"
      justifyContent="flex-start"
      onClick={() => onSelect(character)}
    >
      {character.fileName}
    </Button>
  );
}
