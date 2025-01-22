'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { RocketProgress } from '@/app/components/rockets';
import { useSubscribeToRocketProgress, useRockets } from '@/app/hooks';
import AnimatedBackground from '@/app/components/common/AnimatedBackground';
import { VictoryModal } from '@/app/components/common';

interface RaceState {
  rocket1: {
    id: string;
    progress: number;
    exploded: boolean;
  };
  rocket2: {
    id: string;
    progress: number;
    exploded: boolean;
  };
  winner: string | null;
}

const RacePage = () => {
  const { raceId, rocket1: rocket1Id, rocket2: rocket2Id } = useParams();
  const { rockets } = useRockets();
  
  const rocket1Data = useMemo(() => 
    rockets.find(r => r.id === rocket1Id),
    [rockets, rocket1Id]
  );
  
  const rocket2Data = useMemo(() => 
    rockets.find(r => r.id === rocket2Id),
    [rockets, rocket2Id]
  );

  const [raceState, setRaceState] = useState<RaceState>({
    rocket1: { id: rocket1Id as string, progress: 0, exploded: false },
    rocket2: { id: rocket2Id as string, progress: 0, exploded: false },
    winner: null
  });

  const rocket1Progress = useSubscribeToRocketProgress(
    raceId as string,
    rocket1Id as string
  );

  const rocket2Progress = useSubscribeToRocketProgress(
    raceId as string,
    rocket2Id as string
  );

  const updateRocket1Progress = useCallback(() => {
    const progress = rocket1Progress?.progress;
    if (progress) {
      setRaceState(prev => ({
        ...prev,
        rocket1: {
          ...prev.rocket1,
          progress: progress.progress ?? 0,
          exploded: progress.exploded ?? false
        },
        winner: progress.progress >= 100 ? (rocket1Id as string) : prev.winner
      }));
    }
  }, [rocket1Progress?.progress, rocket1Id]);

  const updateRocket2Progress = useCallback(() => {
    const progress = rocket2Progress?.progress;
    if (progress) {
      setRaceState(prev => ({
        ...prev,
        rocket2: {
          ...prev.rocket2,
          progress: progress.progress ?? 0,
          exploded: progress.exploded ?? false
        },
        winner: progress.progress >= 100 ? (rocket2Id as string) : prev.winner
      }));
    }
  }, [rocket2Progress?.progress, rocket2Id]);

  useEffect(() => {
    updateRocket1Progress();
  }, [updateRocket1Progress]);

  useEffect(() => {
    updateRocket2Progress();
  }, [updateRocket2Progress]);

  useEffect(() => {
    if (raceState.rocket1.exploded && !raceState.winner) {
      setRaceState(prev => ({
        ...prev,
        winner: rocket2Id as string
      }));
    } else if (raceState.rocket2.exploded && !raceState.winner) {
      setRaceState(prev => ({
        ...prev,
        winner: rocket1Id as string
      }));
    }
  }, [raceState.rocket1.exploded, raceState.rocket2.exploded, raceState.winner, rocket1Id, rocket2Id]);

  const maxProgress = useMemo(() => 
    Math.max(raceState.rocket1.progress, raceState.rocket2.progress),
    [raceState.rocket1.progress, raceState.rocket2.progress]
  );

  const winnerRocket = useMemo(() => {
    if (!raceState.winner) return null;
    return raceState.winner === rocket1Id ? rocket1Data : rocket2Data;
  }, [raceState.winner, rocket1Id, rocket1Data, rocket2Data]);

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden relative">
      <AnimatedBackground progress={maxProgress} />
      
      <h1 className="relative z-10 text-4xl font-bold text-white mt-8">Course en direct 🚀</h1>
      
      <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-center items-end space-x-16 w-full pb-0">
        <RocketProgress
          progress={raceState.rocket1.progress}
          exploded={raceState.rocket1.exploded}
          isWinner={raceState.winner === rocket1Id}
          rocket={rocket1Data}
        />
        <RocketProgress
          progress={raceState.rocket2.progress}
          exploded={raceState.rocket2.exploded}
          isWinner={raceState.winner === rocket2Id}
          rocket={rocket2Data}
        />
      </div>

      {winnerRocket && (
        <VictoryModal
          rocketName={winnerRocket.name}
          rocketImage={winnerRocket.image}
        />
      )}
    </div>
  );
};

export default RacePage; 