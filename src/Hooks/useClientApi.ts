"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosSecure } from "@/Hooks/useAxiosSecure";
import { axiosPublic } from "@/Hooks/useAxiosPublic";

type apiProps = {
  key?: any[];
  endpoint?: string;
  method?: "get" | "post" | "put" | "delete";
  isPrivate?: boolean;
  onSuccess?: any;
  onError?: any;
  queryOptions?: any;
  mutationOptions?: any;
  axiosOptions?: any;
  params?: any;
  headers?: any;
  enabled?: boolean;
};

export default function useClientApi({
  endpoint,
  method = "get",
  isPrivate = false,
  key,
  onSuccess,
  onError,
  params,
  headers,
  queryOptions,
  mutationOptions,
  axiosOptions,
  enabled = true,
}: apiProps): any {
  const axiosInstance = (isPrivate ? axiosSecure : axiosPublic) as any;

  if (method === "get") {
    return useQuery({
      queryKey: key,
      queryFn: async () => {
        const res = await axiosInstance.get(endpoint, { params, headers });
        return res.data;
      },
      enabled,
      ...queryOptions,
    });
  }

  return useMutation({
    mutationKey: key,
    mutationFn: async (variables?: { endpoint?: string; data?: any } | any) => {
      // Support:
      // - mutate({ data })
      // - mutate({ endpoint: "/api/other" })
      // - mutate({ endpoint: "/api/other", data })
      const dynamicEndpoint = variables?.endpoint || endpoint;
      const payload = variables?.data || variables;

      let res;

      if (method.toLowerCase() === "delete") {
        res = await axiosInstance.delete(dynamicEndpoint, {
          data: payload,
          headers,
          ...axiosOptions,
        });
      } else {
        res = await axiosInstance[method](dynamicEndpoint, payload, {
          headers,
          ...axiosOptions,
        });
      }

      return res?.data;
    },
    onSuccess,
    onError,
    ...mutationOptions,
  });
}
