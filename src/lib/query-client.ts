import {
  type InvalidateQueryFilters,
  type QueryFunctionContext,
  type UseQueryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { httpClient } from "./http-client"

export type FetchConfig<T> = Omit<
  UseQueryOptions<T, Error, T, QueryKeyT>,
  "queryKey" | "queryFn"
>

export type QueryKeyT = [string, Record<string, string | number>]

export const fetcher = async <T>({
  queryKey,
}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey
  const res = await httpClient.get<T>(url, params)
  return res
}

type FetchFn<T, S> = (data: T | S) => Promise<Response>

export const useGenericMutation = <T, S>(
  mutationFn: FetchFn<T, S>,
  url: string | null,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined,
  invalidateQuery?: InvalidateQueryFilters
) => {
  const queryClient = useQueryClient()
  const queryKey = [url!, params] as const
  return useMutation<Response, Error, T | S>({
    mutationFn: async (data: T | S) => {
      const response = await mutationFn(data)
      if (!response) {
        throw new Error(`Network response failed`)
      }

      return response
    },
    mutationKey: [url],
    onMutate: async (data: T | S) => {
      await queryClient.cancelQueries({ queryKey })
      const previousData = queryClient.getQueryData<T>(queryKey)

      queryClient.setQueryData<T>(queryKey, (oldData) =>
        updater ? updater(oldData!, data as S) : (data as T)
      )

      return previousData
    },
    onError: (_err: Error, _: unknown, context: unknown) => {
      queryClient.setQueryData(queryKey, context)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })

      if (invalidateQuery) {
        queryClient.invalidateQueries(invalidateQuery)
      }
    },
  })
}
