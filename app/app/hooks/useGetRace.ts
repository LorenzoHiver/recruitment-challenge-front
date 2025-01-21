import { useQuery } from '@apollo/client';
import { GET_RACE, GetRaceResponse, GetRaceVariables } from '../apollo/queries';

const useGetRace = (id: string) => {
  const { data, loading, error } = useQuery<GetRaceResponse, GetRaceVariables>(GET_RACE, {
    variables: { id },
  });

  return { race: data?.race, loading, error };
};

export default useGetRace;