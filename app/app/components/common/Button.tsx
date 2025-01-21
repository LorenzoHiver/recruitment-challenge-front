import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg text-white font-bold transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-800 hover:bg-blue-900"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
