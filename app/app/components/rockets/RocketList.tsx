"use client";

import React, { useState } from "react";
import { useRockets } from "../../hooks";
import RocketCard from "./RocketCard";
import Loader from "../common/Loader";
import { Button } from "../common";

const RocketList: React.FC = () => {
  const { rockets, loading, error } = useRockets();
  const [selectedRockets, setSelectedRockets] = useState<string[]>([]);

  const toggleRocketSelection = (rocketId: string) => {
    setSelectedRockets((prevSelected) => {
      if (prevSelected.includes(rocketId)) {
        return prevSelected.filter((id) => id !== rocketId);
      } else if (prevSelected.length < 2) {
        return [...prevSelected, rocketId];
      } else {
        return [prevSelected[0], rocketId];
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center mt-6">Erreur : {error.message}</p>
    );
  }

  return (
    <div
      className="flex flex-col justify-between items-center min-h-screen px-4 py-8"
      style={{
        background: "linear-gradient(180deg, #4682B4 0%, #C3EEFF 100%)",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Rocket Race 🚀</h1>
        <p className="text-lg text-white mt-2">
          Sélectionnez deux fusées parmi la liste ci-dessous
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {rockets.map((rocket) => (
          <RocketCard
            key={rocket.id}
            rocket={rocket}
            isSelected={selectedRockets.includes(rocket.id)}
            onClick={() => toggleRocketSelection(rocket.id)}
          />
        ))}
      </div>

      <Button
        onClick={() =>
          alert(
            "Course démarrée avec les fusées : " + selectedRockets.join(", ")
          )
        }
        disabled={selectedRockets.length !== 2}
      >
        DÉMARRER LA COURSE
      </Button>
    </div>
  );
};

export default RocketList;
