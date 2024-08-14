import React, { Suspense, useState } from "react";
import "../assets/css/CharacterSelect.css";
import { ThumbnailModel } from "./ThumbnailModel";

interface Character {
  title: string;
  name: string;
  modelURL: string;
  description: string;
}

const characters: Character[] = [
  {
    title: "President of Business Development",
    name: "Jeff D. Jeffries",
    modelURL: "/assets/models/robsquid.glb",
    description:
      "Jeff has a decade of experience in event management and has led numerous successful projects across the country.",
  },
  {
    title: "Chief Logistics Officer",
    name: "Phi Bui",
    modelURL: "/assets/models/veigar.glb",
    description:
      "Phi is a creative visionary with a deep understanding of the arts and a passion for bringing unique experiences to life.",
  },
  {
    title: "Creative Director",
    name: "Marcelo Escobar",
    modelURL: "/assets/models/piccolo.glb",
    description:
      "Marcelo is an innovative artist with a passion for the underground scene and a knack for creating memorable visuals.",
  },
  {
    title: "Head of Public Relations",
    name: "Qad Muhammad",
    modelURL: "/assets/models/cat.glb",
    description:
      "Marcelo is an innovative artist with a passion for the underground scene and a knack for creating memorable visuals.",
  },
];

export const CharacterSelect: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    characters[0]
  );

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="character-select-container">
      <div className="character-list">
        {characters.map((character, index) => (
          <button
            key={index}
            className="character-button"
            onClick={() => handleCharacterClick(character)}
          >
            <p>{character.title}</p>
          </button>
        ))}
      </div>
      <div className="character-info-container">
        <div className="character-info">
          <div className="front">
            <div className="character-photo">
              <Suspense fallback={<div className="loading-spinner"></div>}>
                <ThumbnailModel
                  key={selectedCharacter.modelURL} // Force re-render by using the model URL as a key
                  assetUrl={selectedCharacter.modelURL}
                  enableHover={false}
                />
              </Suspense>
            </div>
            <h1>{selectedCharacter.name}</h1>
            <h2>{selectedCharacter.title}</h2>
          </div>
          <div className="back">
            <p className="character-description">
              {selectedCharacter.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
