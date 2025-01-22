import React from 'react';
import { Rocket } from '../../apollo/types';

interface RocketCardProps {
  rocket: Rocket;
  isSelected: boolean;
  onClick: () => void;
}

const RocketCard: React.FC<RocketCardProps> = ({ rocket, isSelected, onClick }) => {
  return (
    <div
      className={`cursor-pointer rounded-lg p-4 flex items-center transition-transform transform bg-white ${
        isSelected ? 'outline outline-4 outline-blue-800' : 'outline-none'
      }`}
      onClick={onClick}
    >
      <img
        src={rocket.image}
        alt={rocket.name}
        className="w-16 h-16 object-contain mr-4"
      />

      <div>
        <h2 className="text-lg font-bold text-gray-800">{rocket.name}</h2>
        <p className="text-sm text-gray-600">{rocket.description}</p>
      </div>
    </div>
  );
};

export default RocketCard;