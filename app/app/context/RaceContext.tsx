import React, { createContext, useContext, useState, ReactNode } from "react";
import { Race, Rocket } from "../apollo/types";

interface RaceContextProps {
  selectedRockets: Rocket[];
  setSelectedRockets: (rockets: Rocket[]) => void;
  currentRace: Race | null;
  setCurrentRace: (race: Race | null) => void;
  clearRace: () => void;
}

const RaceContext = createContext<RaceContextProps | undefined>(undefined);

export const RaceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedRockets, setSelectedRockets] = useState<Rocket[]>([]);
  const [currentRace, setCurrentRace] = useState<Race | null>(null);

  const clearRace = () => {
    setSelectedRockets([]);
    setCurrentRace(null);
  };

  return (
    <RaceContext.Provider
      value={{
        selectedRockets,
        setSelectedRockets,
        currentRace,
        setCurrentRace,
        clearRace,
      }}
    >
      {children}
    </RaceContext.Provider>
  );
};

export const useRaceContext = (): RaceContextProps => {
  const context = useContext(RaceContext);
  if (!context) {
    throw new Error("useRaceContext must be used within a RaceProvider");
  }
  return context;
};
