import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"></div>
      <span className="ml-4 text-xl font-medium">Loading...</span>
    </div>
  );
};

export default Loading;
