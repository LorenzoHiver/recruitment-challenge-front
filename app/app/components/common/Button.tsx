import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg text-white font-bold transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-800 hover:bg-blue-900"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
