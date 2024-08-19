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
      "An undergrad in Environment Science, a heart in Miami, and a soul in music, Jeff crafts his setlists like he writes legal documents, with fervor and passion.",
  },
  {
    title: "Creative Director",
    name: "Marcelo Escobar",
    modelURL: "/assets/models/piccolo.glb",
    description:
      "A Boston-born and raised designer, Marcelo just wants to share his unique vision with the world, while keeping it true to his roots.",
  },
  {
    title: "Chief Logistics Officer",
    name: "Phi Bui",
    modelURL: "/assets/models/veigar.glb",
    description:
      "Someone has to make sure all of these ideas happen, that's Phi's job.",
  },
  {
    title: "Head of Public Relations",
    name: "Qad Muhammad",
    modelURL: "/assets/models/cat.glb",
    description: "Simply put, Qad is Boston's premiere IT girl.",
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
