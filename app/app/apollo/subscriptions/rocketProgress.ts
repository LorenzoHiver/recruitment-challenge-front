import { gql } from '@apollo/client';
import { RocketProgressEvent } from '../types';

export const ROCKET_PROGRESS_SUBSCRIPTION = gql`
  subscription RocketProgress($raceId: ID!, $rocketId: ID!) {
    rocketProgress(raceId: $raceId, rocketId: $rocketId) {
      raceId
      rocketId
      progress
      exploded
    }
  }
`;

export interface RocketProgressResponse {
  rocketProgress: RocketProgressEvent;
}

export interface RocketProgressVariables {
  raceId: string; 
  rocketId: string;
}