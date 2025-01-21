import React from "react";

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 24, color = "blue" }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `3px solid ${color}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
};

export default Loader;
