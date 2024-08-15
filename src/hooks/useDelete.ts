import { httpClient } from "@/lib/http-client"
import { useGenericMutation } from "@/lib/query-client"

type UseDelete<T> = {
  url: string
  params?: object
  updater?: (oldData: T, id: number) => T
}

export const useDelete = <T>({ url, params, updater }: UseDelete<T>) => {
  return useGenericMutation<T, number>(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    (id) => httpClient.delete(`${url}/${id}`),
    url,
    params,
    updater
  )
}
