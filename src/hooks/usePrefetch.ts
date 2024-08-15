import { useQueryClient } from "@tanstack/react-query"
import { type QueryKeyT, fetcher } from "@/lib/query-client"

export const usePrefetch = <T>(
  url: string | null,
  params?: Record<string, string | number>
) => {
  const queryClient = useQueryClient()

  return () => {
    if (!url) return

    queryClient.prefetchQuery<T, Error, T, QueryKeyT>({
      queryKey: [url!, params!],
      queryFn: (query) => fetcher(query),
    })
  }
}
