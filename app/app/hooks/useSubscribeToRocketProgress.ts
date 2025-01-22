import { useSubscription } from '@apollo/client';
import {
  ROCKET_PROGRESS_SUBSCRIPTION,
  RocketProgressResponse,
  RocketProgressVariables,
} from '../apollo/subscriptions';

const useSubscribeToRocketProgress = (raceId: string, rocketId: string) => {
  const { data, loading, error } = useSubscription<RocketProgressResponse, RocketProgressVariables>(
    ROCKET_PROGRESS_SUBSCRIPTION,
    {
      variables: { raceId, rocketId },
      onError: (error) => {
        console.error('Erreur de souscription:', error);
      }
    }
  );

  return {
    progress: data?.rocketProgress,
    loading,
    error,
  };
};

export default useSubscribeToRocketProgress;