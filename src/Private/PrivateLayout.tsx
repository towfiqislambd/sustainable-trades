"use client";
import React, { useEffect } from "react";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { PuffLoader } from "react-spinners";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, token, loading } = useAuth();

  useEffect(() => {
    if (!loading && !token && !user) {
      router.push("/auth/login");
    }
  }, [loading, token, user, router]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#274f45" />
      </div>
    );
  }

  if (token || user) {
    return <>{children}</>;
  }

  return null;
};

export default PrivateLayout;
