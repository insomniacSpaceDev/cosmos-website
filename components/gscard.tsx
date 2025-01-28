import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-gray-200 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg">
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="text-lg font-bold">{children}</h3>
  );
};

const CardContent = ({ children }) => {
  return (
    <div className="p-4">
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent };