import { ApolloError } from '@apollo/client';
import { useToast } from '../hooks/useToast';

export const useApolloError = () => {
  const toast = useToast();

  const handleError = (error: ApolloError) => {
    const message = error.graphQLErrors?.[0]?.message || error.message;
    
    toast({
      title: 'Erreur',
      description: message,
      status: 'error',
      duration: 5000,
    });

    return message;
  };

  return { handleError };
}; 