import React from "react";
import { AlertTriangle } from "lucide-react";

const ServerError: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-center p-4 bg-red-50 border border-red-200 rounded-xl shadow-sm">
      <AlertTriangle className="text-red-600 w-12 h-12 mb-4" />
      <h2 className="text-2xl font-semibold text-red-700">Server Error</h2>
      <p className="text-red-600 mt-2">
        Sorry! Unable to connect to server.
        <br />
        Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Retry
      </button>
    </div>
  );
};

export default ServerError;
