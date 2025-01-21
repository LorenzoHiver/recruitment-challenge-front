import { gql } from '@apollo/client';
import { Race } from '../types';

export const GET_RACE = gql`
  query GetRace($id: ID!) {
    race(id: $id) {
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

export interface GetRaceResponse {
  race: Race;
}

export interface GetRaceVariables {
  id: string;
}