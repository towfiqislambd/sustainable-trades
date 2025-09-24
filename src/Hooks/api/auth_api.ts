import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import useClientApi from "@/Hooks/useClientApi";
import { useRouter } from "next/navigation";

// Get User Data
export const useGetUserData = (token: any) => {
  return useClientApi({
    method: "get",
    key: ["user", token],
    enabled: !!token,
    endpoint: "/api/users/data",
    isPrivate: true,
    queryOptions: {
      refetchInterval: 1000 * 60 * 60, // refetch every hour
    },
  });
};

// Create Shop
export const useCreateShop = () => {
  const { setToken } = useAuth();

  return useClientApi({
    method: "post",
    key: ["create-shop"],
    endpoint: "/api/shop/owners",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onSuccess: (data: any) => {
      if (data?.success) {
        setToken(data?.data?.token);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Purchase Plan
export const usePurchasePlan = (plan_id: number) => {
  return useClientApi({
    method: "post",
    key: ["purchase-plan"],
    isPrivate: true,
    endpoint: `/api/membership/${plan_id}`,
    onSuccess: (data: any) => {
      if (data?.success) {
        toast.success(data?.message);
        window.location.href = data?.data?.url;
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Registration
export const useRegister = () => {
  const router = useRouter();
  return useClientApi({
    method: "post",
    key: ["register"],
    endpoint: "/api/users/register",
    onSuccess: (data: any) => {
      if (data?.success) {
        toast.success(data?.message);
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Login
export const useLogin = () => {
  const router = useRouter();
  const { setToken } = useAuth();

  
  return useClientApi({
    method: "post",
    key: ["login"],
    endpoint: "/api/users/login",
    onSuccess: (data: any) => {
      if (data?.success) {
        setToken(data?.data?.token);
        toast.success(data?.message);
        router.push(
          `${
            data?.data?.role === "customer"
              ? "/dashboard/customer/orders"
              : data?.data?.role === "vendor" &&
                data?.data?.membership?.membership_type === "pro"
              ? "/dashboard/pro/home"
              : "/dashboard/basic/home"
          }`
        );
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Logout
export const useLogout = () => {
  const router = useRouter();
  const { clearToken } = useAuth();

  return useClientApi({
    method: "post",
    key: ["logout"],
    isPrivate: true,
    endpoint: "/api/users/logout",
    onSuccess: (data: any) => {
      if (data?.success) {
        clearToken();
        toast.success(data?.message);
        router.replace("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
