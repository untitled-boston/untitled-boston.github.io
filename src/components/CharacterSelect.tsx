import React, { useState } from "react";
import "../assets/css/CharacterSelect.css";

interface Character {
  title: string;
  name: string;
  photo: string;
  description: string;
  stats: number;
}

const characters: Character[] = [
  {
    title: "President of Business Development",
    name: "Jeff D. Jeffries",
    photo: "/path/to/john-doe.jpg",
    description:
      "Jeff has a decade of experience in event management and has led numerous successful projects across the country.",
    stats: 5,
  },
  {
    title: "Chief Logistics Officer",
    name: "Phi Bui",
    photo: "/path/to/jane-smith.jpg",
    description:
      "Phi is a creative visionary with a deep understanding of the arts and a passion for bringing unique experiences to life.",
    stats: 4,
  },
  {
    title: "Creative Director",
    name: "Marcelo Escobar",
    photo: "/path/to/jane-smith.jpg",
    description:
      "Marcelo is an innovative artist with a passion for the underground scene and a knack for creating memorable visuals.",
    stats: 3,
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
        <div className="character-info">
          <div className="front">
            <img
              src={selectedCharacter.photo}
              alt={selectedCharacter.name}
              className="character-photo"
            />
            <h2>{selectedCharacter.title}</h2>
            <h1>{selectedCharacter.name}</h1>
          </div>
          <div className="back">
            <p className="character-description">
              {selectedCharacter.description}
            </p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="star"
                  style={{
                    color: i < selectedCharacter.stats ? "gold" : "gray",
                  }}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
