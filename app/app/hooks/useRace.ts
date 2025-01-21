import { useMutation } from "@apollo/client";
import {
  START_RACE,
  StartRaceResponse,
  StartRaceVariables,
} from "../apollo/mutations";

const useRace = () => {
  const [startRaceMutation, { loading: startingRace, error: startRaceError }] =
    useMutation<StartRaceResponse, StartRaceVariables>(START_RACE);

  const startRace = async (rocket1: string, rocket2: string) => {
    const { data } = await startRaceMutation({
      variables: { rocket1, rocket2 },
    });
    return data?.startRace;
  };

  return {
    startRace,
    startingRace,
    startRaceError,
  };
};

export default useRace;
