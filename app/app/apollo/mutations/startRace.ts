import { gql } from "@apollo/client";
import { Race } from "../types";

export const START_RACE = gql`
  mutation StartRace($rocket1: ID!, $rocket2: ID!) {
    startRace(rocket1: $rocket1, rocket2: $rocket2) {
      id
      rocket1 {
        id
        progress
        exploded
      }
      rocket2 {
        id
        progress
        exploded
      }
      winner
    }
  }
`;

export interface StartRaceResponse {
  startRace: Race;
}

export interface StartRaceVariables {
  rocket1: string;
  rocket2: string;
}
