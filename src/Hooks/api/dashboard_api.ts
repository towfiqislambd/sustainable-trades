import toast from "react-hot-toast";
import useClientApi from "@/Hooks/useClientApi";

// Add Product
export const useAddProduct = () => {
  return useClientApi({
    method: "post",
    key: ["add-product"],
    isPrivate: true,
    endpoint: `/products-store`,
    onSuccess: (data: any) => {
      if (data?.success) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
