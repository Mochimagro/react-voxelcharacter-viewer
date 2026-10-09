import { characters } from "../data/characters";
import CharacterViewer from "./CharacterViewer";

export default function SAMPLE_3DView() {
  const character = characters.find(
    (item) => item.fileName === "Present02.glb",
  );

  if (!character) {
    return <p>Present02.glb が見つかりません。</p>;
  }

  return <CharacterViewer character={character} />;
}
