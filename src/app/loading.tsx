import React from "react";
import { PuffLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center text-5xl">
      <PuffLoader color="#274f45" />
    </div>
  );
};

export default loading;
