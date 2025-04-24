import React from "react";

export const Main = ({ children }) => {
  return (
    <main className="flex justify-center items-center flex-wrap flex-grow  h-auto mb-1 m-10">
      <div className="mb-1 w-full">{children}</div>
    </main>
  );
};

