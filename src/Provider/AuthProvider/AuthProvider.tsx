"use client";
import { useGetUserData } from "@/Hooks/api/auth_api";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextValue {
  loading: boolean;
  user: any;
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
  latitude: any;
  longitude: any;
  setLatitude: any;
  setLongitude: any;
}

export const AuthContextProvider = createContext<AuthContextValue | any>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [token, setToken, clearToken] = useLocalStorage("token", null);
  const [latitude, setLatitude] = useLocalStorage("lat", null);
  const [longitude, setLongitude] = useLocalStorage("lng", null);
  const { data: userData, isLoading: loadingUserData } = useGetUserData(token);

  useEffect(() => {
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    if (loadingUserData) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (userData?.success) {
      setUser(userData?.data);
    } else {
      setUser(null);
    }
  }, [token, userData, loadingUserData]);

  // values to pass:
  const contextValue: AuthContextValue = {
    loading,
    user,
    token,
    latitude,
    longitude,
    setToken,
    setLatitude,
    setLongitude,
    clearToken,
  };

  return (
    <AuthContextProvider.Provider value={contextValue}>
      {children}
    </AuthContextProvider.Provider>
  );
}
