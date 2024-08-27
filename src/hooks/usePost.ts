import { type InvalidateQueryFilters } from '@tanstack/react-query';
import { httpClient } from '@/lib/http-client';
import { useGenericMutation } from '@/lib/query-client';

type UsePost<T, S> = {
  url: string
  params?: Record<string, string | number>
  updater?: (oldData: T, newData: S) => T
  invalidateQuery?: InvalidateQueryFilters
};

export const usePost = <T, S>({
  url,
  params,
  updater,
  invalidateQuery,
}: UsePost<T, S>) => {
  return useGenericMutation<T, S>(
    (data) => httpClient.post<Response>(url, data),
    url,
    params,
    updater,
    invalidateQuery
  );
};
