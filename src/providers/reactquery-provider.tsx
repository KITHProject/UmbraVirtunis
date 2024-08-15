"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import * as React from "react"
import { getQueryClient } from "@/lib/query"

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
