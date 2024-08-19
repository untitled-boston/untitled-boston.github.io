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
      "An undergrad in Environment Science, a heart in Miami, and a soul in music, Jeff exists with fervor and passion.",
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
    modelURL: "/assets/models/roblox.glb",
    description: "Simply put, Qad is Boston's premiere IT girl.",
  },
  {
    title: "Editor in Chief",
    name: "Sacha Licholai",
    modelURL: "/assets/models/pony.glb",
    description:
      "An eclectic Tisch film student at NYU who decided to document the rise of Untitled.",
  },
];

const djs: Character[] = [
  {
    title: "Resident DJ",
    name: "Betsy O'Reilly",
    modelURL: "/assets/models/cat.glb",
    description: "Untitled's very own super-villain.",
  },
  {
    title: "Resident DJ",
    name: "Stanley Joe",
    modelURL: "/assets/models/guy.glb",
    description: "Style, sleaze, swagger.",
  },
  {
    title: "Resident DJ",
    name: "Quique De La Cruz",
    modelURL: "/assets/models/man.glb",
    description: "Master of dance and good vibes.",
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
      {window.innerWidth <= 768 ? (
        <div className="character-list">
          {characters.map((character, index) => (
            <button
              key={index}
              className="character-button"
              onClick={() => handleCharacterClick(character)}
            >
              <p>{character.name}</p>
            </button>
          ))}
          {djs.map((character, index) => (
            <button
              key={index}
              className="character-button"
              onClick={() => handleCharacterClick(character)}
            >
              <p>{character.name}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="characters">
          <h1>Executives</h1>
          <div className="character-list">
            {characters.map((character, index) => (
              <button
                key={index}
                className="character-button"
                onClick={() => handleCharacterClick(character)}
              >
                <p>{character.name}</p>
              </button>
            ))}
          </div>
          <h1>Resident DJs</h1>
          <div className="character-list">
            {djs.map((character, index) => (
              <button
                key={index}
                className="character-button"
                onClick={() => handleCharacterClick(character)}
              >
                <p>{character.name}</p>
              </button>
            ))}
          </div>
        </div>
      )}
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
