import { useQuery } from '@apollo/client';
import { GET_ROCKETS, GetRocketsResponse } from '../apollo/queries';

const useRockets = () => {
  const { data, loading, error } = useQuery<GetRocketsResponse>(GET_ROCKETS);

  return {
    rockets: data?.rockets || [],
    loading,
    error,
  };
};

export default useRockets;