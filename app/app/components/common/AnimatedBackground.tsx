import React from 'react';

interface AnimatedBackgroundProps {
  speed?: number;
  progress: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ speed = 20, progress }) => {
  return (
    <div className="fixed inset-0 z-0">
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D1B2A 0%, #23415D 20%, #2F577A 35%, #3B6D97 50%, #4682B4 70%, #C3EEFF 100%)",
          backgroundSize: "100% 400%",
          backgroundPosition: `0 ${100 - progress}%`,
          transition: 'background-position 0.3s ease-out'
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 