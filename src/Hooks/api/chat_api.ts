import toast from "react-hot-toast";
import useClientApi from "@/Hooks/useClientApi";
import { useQueryClient } from "@tanstack/react-query";

// Get All Conversation
export const getAllConversation = () => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    key: ["get-all-conversation"],
    endpoint: "/api/conversation",
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
        toast.success(data?.message);
        queryClient.invalidateQueries("get-single-conversation" as any);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
