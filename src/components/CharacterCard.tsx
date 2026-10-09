import { Box, Button, Image, Text } from "@chakra-ui/react";
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
      height="auto"
      flexDirection="column"
      alignItems="stretch"
      gap="2"
      padding="2"
      onClick={() => onSelect(character)}
    >
      <Box width="100%" aspectRatio="1" overflow="hidden" borderRadius="sm">
        {character.thumbnailUrl ? (
          <Image
            src={character.thumbnailUrl}
            alt=""
            width="100%"
            height="100%"
            objectFit="cover"
          />
        ) : (
          <Box width="100%" height="100%" background="gray.100" />
        )}
      </Box>
      <Text width="100%" textAlign="left">
        {character.fileName}
      </Text>
    </Button>
  );
}
