import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1312px] mx-auto px-2.5 md:px-5">{children}</div>
  );
};

export default Container;
