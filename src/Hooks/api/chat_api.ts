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
