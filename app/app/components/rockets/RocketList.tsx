"use client";

import React, { useCallback, useState } from "react";
import { useRockets, useRace } from "../../hooks";
import RocketCard from "./RocketCard";
import Loader from "../common/Loader";
import { Button } from "../common";
import { useRouter } from "next/navigation";
import { useApolloError } from "../../hooks/useApolloError";
import { ApolloError } from "@apollo/client";
import ErrorMessage from "../common/ErrorMessage";

const RocketList: React.FC = () => {
  const { rockets, loading, error } = useRockets();
  const [selectedRockets, setSelectedRockets] = useState<string[]>([]);
  const router = useRouter();
  const { startRace } = useRace();
  const { handleError } = useApolloError();

  const toggleRocketSelection = useCallback((rocketId: string) => {
    setSelectedRockets((prevSelected) => {
      if (prevSelected.includes(rocketId)) {
        return prevSelected.filter((id) => id !== rocketId);
      } else if (prevSelected.length < 2) {
        return [...prevSelected, rocketId];
      }
      return [prevSelected[0], rocketId];
    });
  }, []);

  const handleStartRace = useCallback(async () => {
    if (selectedRockets.length !== 2) return;

    try {
      const race = await startRace(selectedRockets[0], selectedRockets[1]);
      if (!race?.id) throw new Error("Course invalide");

      router.push(`/race/${race.id}/${selectedRockets[0]}/${selectedRockets[1]}`);
    } catch (error) {
      if (error instanceof ApolloError) {
        handleError(error);
      }
    }
  }, [selectedRockets, startRace, router, handleError]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

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
          Sélectionnez deux fusées pour commencer
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
        onClick={handleStartRace}
        disabled={selectedRockets.length !== 2}
        className="mt-8"
      >
        DÉMARRER LA COURSE
      </Button>
    </div>
  );
};

export default RocketList;
