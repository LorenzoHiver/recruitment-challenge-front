export interface Rocket {
    id: string;
    name: string;
    description: string;
    image: string;
  }
  
  export interface RocketProgress {
    id: string;
    progress: number;
    exploded: boolean; 
  }
  
  export interface Race {
    id: string;
    rocket1: RocketProgress;
    rocket2: RocketProgress;
    winner: string | null;
  }
  
  export interface RocketProgressEvent {
    raceId: string;
    rocketId: string;
    progress: number;
    exploded: boolean;
  }