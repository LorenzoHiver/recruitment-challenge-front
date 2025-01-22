import React from 'react';

interface ErrorMessageProps {
  message: string;
  retry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, retry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
        <h2 className="text-xl font-bold text-red-700 mb-2">
          Une erreur est survenue
        </h2>
        <p className="text-red-600 mb-4">{message}</p>
        {retry && (
          <button
            onClick={retry}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Réessayer
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage; 