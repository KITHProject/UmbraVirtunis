import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useUpdateQueryParams = () => {
  const router = useRouter();

  const updateQueryParams = useCallback((params: Record<string, string | null>) => {
      const url = new URL(window.location.href);
      const currentParams = Object.fromEntries(url.searchParams.entries());
      const newParams = { ...currentParams, ...params };

      Object.keys(newParams).forEach(key => {
          if (newParams[key]) {
              url.searchParams.set(key, newParams[key]!);
          } else {
              url.searchParams.delete(key);
          }
      });

      router.push(url.toString());
  }, [router]);

  return updateQueryParams;
};