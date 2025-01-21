import { gql } from '@apollo/client';
import { Rocket } from '../types';

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      description
      image
    }
  }
`;

export interface GetRocketsResponse {
  rockets: Rocket[];
}