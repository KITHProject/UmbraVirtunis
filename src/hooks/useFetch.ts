import { useQuery } from '@tanstack/react-query';
import { type FetchConfig, type QueryKeyT, fetcher } from '@/lib/query-client';

type UseFetch<T> = {
  url: string | null
  params?: Record<string, string | number>
  config?: FetchConfig<T>
  enabled?: boolean
};

export const useFetch = <T>({
  url,
  params,
  config,
  enabled = !!url,
}: UseFetch<T>) => {
  const queryKey: QueryKeyT = [url!, params!];
  return useQuery<T, Error, T, QueryKeyT>({
    queryKey,
    queryFn: (query) => fetcher(query),
    enabled: enabled,
    ...config,
  });
};
