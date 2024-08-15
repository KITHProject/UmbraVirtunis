import { httpClient } from "@/lib/http-client"
import { useGenericMutation } from "@/lib/query-client"

type UseUpdate<T, S> = {
  url: string
  params?: object
  updater?: (oldData: T, newData: S) => T
  method?: "PATCH" | "PUT"
}

export const useUpdate = <T, S>({
  url,
  params,
  updater,
  method = "PUT",
}: UseUpdate<T, S>) => {
  return useGenericMutation<T, S>(
    (data) =>
      method === "PATCH"
        ? httpClient.patch<S & Response>(url, data)
        : httpClient.put<S & Response>(url, data),
    url,
    params,
    updater
  )
}
