// src/pages/404.tsx

import React from "react";
import { Link } from "gatsby";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Main Content */}
      <div className="text-center space-y-6">
        {/* Title */}
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          404
        </h1>

        {/* Subtitle */}
        <p className="text-3xl font-semibold">Oops! Page Not Found</p>

        {/* Description */}
        <p className="text-lg text-gray-600">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
