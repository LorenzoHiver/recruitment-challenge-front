import { useSubscription, SubscriptionHookOptions, OperationVariables, DocumentNode } from '@apollo/client';

function useSubscriptionHook<TData, TVariables extends OperationVariables>(
  subscription: DocumentNode,
  options?: SubscriptionHookOptions<TData, TVariables>
) {
  const { data, loading, error } = useSubscription<TData, TVariables>(subscription, options);

  return { data, loading, error };
}

export default useSubscriptionHook;