// src/components/UI/LoadingSpinner.tsx

import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-6 h-6 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;