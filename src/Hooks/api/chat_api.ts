import useClientApi from "@/Hooks/useClientApi";

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
