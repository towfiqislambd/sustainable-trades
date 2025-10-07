import toast from "react-hot-toast";
import useClientApi from "@/Hooks/useClientApi";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../useAxiosSecure";

// Add Product
export const useAddProduct = () => {
  return useClientApi({
    method: "post",
    key: ["add-product"],
    isPrivate: true,
    endpoint: `/api/products-store`,
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

// update product
export const useupdateProduct = (id: string | number) => {
  return useClientApi({
    method: "post",
    key: ["update-product"],
    isPrivate: true,
    endpoint: `/api/product/update/${id}`,
    onSuccess: (data: any) => {
      if (data?.success) toast.success(data.message);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
// delete product
export const useDeleteProduct = (id: string | number) => {
  return useClientApi({
    method: "delete",
    key: ["delete-product", id],
    isPrivate: true,
    endpoint: `/api/product/delete/${id}`,
    onSuccess: (data: any) => {
      if (data?.success) toast.success(data.message);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Get All Listings
export const getallListings = () => {
  return useClientApi({
    method: "get",
    key: ["get-all-listings"],
    isPrivate: true,
    endpoint: "api/products?short_by=a-z",
  });
};


// Fetch a single product/listing by ID
export const useGetSingleListing = (id: string | number) => {
  return useClientApi({
    method: "get",
    key: ["get-single-listing", id],
    isPrivate: true,
    endpoint: `/api/product/${id}`,
  });
};

// useRequestApproval
export const useRequestApproval = (id: string | number) => {
  return useClientApi({
    method: "get",
    key: ["request-approval"],
    isPrivate: true,
    endpoint: `/api/product/request-approval/${id}`,
    onSuccess: (data: any) => {
      if (data?.success)
        toast.success(data.message || "Approval requested successfully!");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Failed to request approval");
    },
  });
};

// Get All Spotlight
export const getmemberShipspotlight = () => {
  return useClientApi({
    method: "get",
    key: ["get-membership-spotlight"],
    isPrivate: true,
    endpoint: "/api/spotlight-applications",
  });
};

// Get All FollowLists
export const getAllFollowList = () => {
  return useClientApi({
    method: "get",
    key: ["get-all-followlist"],
    isPrivate: true,
    endpoint: "/api/my-favorites",
  });
};
// Get All FollowLists
export const getAllShoplist = () => {
  return useClientApi({
    method: "get",
    key: ["get-all-shoplist"],
    isPrivate: true,
    endpoint: "/api/follow-shops",
  });
};


// Logout API
export const useLogout = () => {
  return useClientApi({
    method: "post",
    key: ["logout"],
    isPrivate: true,
    endpoint: "/api/users/logout",
    onSuccess: (data: any) => {
      if (data?.success) toast.success(data.message || "Logged out successfully!");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Logout failed");
    },
  });
};


// fahim bhai

// Get All trades
export const useTradesdata = () => {
  return useClientApi({
    method: "get",
    key: ["get-trades"],
    isPrivate: true,
    endpoint: "/api/trade-offers",
  });
};

// Get All Count
export const useTradeCounts = () => {
  return useClientApi({
    method: "get",
    key: ["get-count"],
    isPrivate: true,
    endpoint: "/api/trade-count",
  });
};

export const useCancelTrade = () => {
  return useClientApi({
    method: "get",
    key: ["cancel-trade"],
    isPrivate: true,
  });
};

export const useApproveTrade = () => {
  return useMutation({
    mutationFn: (id: any) =>
      axiosSecure.get(`/api/trade-offer-approve/${id}`).then((res) => res.data),
  });
};

export const useCancel = () => {
  return useMutation({
    mutationFn: (id: any) =>
      axiosSecure.get(`/api/trade-offer-cancel/${id}`).then((res) => res.data),
  });
};

// Delete Account API
export const useDeleteAccount = () => {
  return useClientApi({
    method: "delete",
    key: ["delete-account"],
    isPrivate: true,
    endpoint: "/api/users/delete",
    onSuccess: (data: any) => {
      if (data?.success) toast.success(data.message || "Account deleted successfully!");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Failed to delete account");
    },
  });
};



// Create Discount
export const useCreateDiscount = () => {
  return useClientApi({
    method: "post",
    key: ["create-discount"],
    isPrivate: true,
    endpoint: "/api/discounts",
    onSuccess: (data: any) => {
      if (data?.success) {
        toast.success(data?.message || "Discount created successfully!");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Failed to create discount.");
    },
  });
};
// dashboard_api.ts
export const useCreateDiscount = () => {
  return useClientApi({
    method: "post",
    key: ["create-discount"],
    isPrivate: true,
    endpoint: "/api/discounts",
    onSuccess: (data: any) => {
      if (data?.success) {
        toast.success(data?.message || "Discount created successfully!");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Failed to create discount.");
    },
  });
};


