import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce200"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce400"></div>
      </div>
      <span className="ml-4 text-xl font-medium">Loading...</span>
    </div>
  );
};

export default Loading;
