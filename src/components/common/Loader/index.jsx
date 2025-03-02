import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-200px)]">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 border-4 border-t-4 border-t-[#1171ef] border-solid rounded-full animate-spin"></div>
        <span className="text-lg font-semibold text-white">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
