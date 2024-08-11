import React, { useState } from "react";
import "../assets/css/CharacterSelect.css";

// Define the type for a character
interface Character {
  title: string;
  name: string;
  photo: string;
  description: string;
}

const characters: Character[] = [
  {
    title: "President of Business Development",
    name: "Jeff D. Jeffries",
    photo: "/path/to/john-doe.jpg",
    description:
      "John has a decade of experience in event management and has led numerous successful projects across the country.",
  },
  {
    title: "Chief Logistics Officer",
    name: "Phi Bui",
    photo: "/path/to/jane-smith.jpg",
    description:
      "Jane is a creative visionary with a deep understanding of the arts and a passion for bringing unique experiences to life.",
  },
  {
    title: "Creative Director",
    name: "Marcelo Escobar",
    photo: "/path/to/jane-smith.jpg",
    description:
      "Jane is a creative visionary with a deep understanding of the arts and a passion for bringing unique experiences to life.",
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
            {character.title}
          </button>
        ))}
      </div>
      <div className="character-info-container">
        {selectedCharacter && (
          <div className="character-info">
            <h1>{selectedCharacter.name}</h1>
            <img
              src={selectedCharacter.photo}
              alt={selectedCharacter.name}
              className="character-photo"
            />
            <p className="character-description">
              {selectedCharacter.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterSelect;
