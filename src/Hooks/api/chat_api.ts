import toast from "react-hot-toast";
import useClientApi from "@/Hooks/useClientApi";
import { useQueryClient } from "@tanstack/react-query";

// Get All Conversation
export const getAllConversation = ({
  name,
  unread,
  sent,
}: {
  name?: string;
  unread?: string;
  sent?: string;
}) => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    key: ["get-all-conversation", name, unread, sent],
    endpoint: "/api/conversation",
    params: { name, unread, sent },
    queryOptions: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    },
  });
};

// Get Single Conversation
export const getSingleConversation = (id: number) => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    enabled: !!id,
    key: ["get-single-conversation", id],
    endpoint: `/api/message?receiver_id=${id}`,
    queryOptions: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    },
  });
};

// Send Message
export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useClientApi({
    method: "post",
    key: ["send-message"],
    isPrivate: true,
    endpoint: "/api/message/send",
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-single-conversation" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Get Local Pickup Conversation
export const getLocalPickupConversation = () => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    key: ["get-local-pickup-conversation"],
    endpoint: "/api/local-pickup/conversation",
    queryOptions: {
      retry: false,
    },
  });
};
