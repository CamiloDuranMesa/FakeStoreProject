import React from "react";

export const Main = ({ children }) => {
  return (
    <main className="flex flex-wrap flex-grow items-center justify-center h-auto mb-1 m-10">
      <div className="mb-1 w-full">{children}</div>
    </main>
  );
};

