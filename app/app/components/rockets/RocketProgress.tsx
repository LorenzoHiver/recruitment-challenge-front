interface RocketProgressProps {
  progress: number;
  exploded: boolean;
  isWinner: boolean;
  rocket?: {
    name: string;
    image: string;
  };
}

export const RocketProgress = ({ progress, exploded, isWinner, rocket }: RocketProgressProps) => {
  return (
    <div className="relative h-[80vh] w-24 flex flex-col items-center">
      <div 
        className="absolute w-full flex flex-col items-center transition-all duration-300"
        style={{ 
          bottom: `${progress}%`,
          transform: 'translateY(0)'
        }}
      >
        {rocket && (
          <>
            <img 
              src={rocket.image} 
              alt={rocket.name} 
              className={`w-20 h-20 object-contain mb-2 transition-transform duration-300 ${
                isWinner && !exploded ? 'animate-bounce' : exploded ? 'rotate-45 opacity-50' : ''
              }`}
            />
            <p className="text-white text-center font-bold">{rocket.name}</p>
            <p className="text-white text-center text-xl font-bold mt-1">
              {Math.round(progress)}%
            </p>
          </>
        )}
      </div>
      
      <div className="absolute bottom-0 w-full h-full">
        <div 
          className={`absolute bottom-0 w-full transition-all duration-300 ease-out ${
            exploded ? 'bg-red-500' : isWinner ? 'bg-green-500' : 'bg-blue-500'
          }`}
          style={{ 
            height: `${progress}%`,
            transition: 'height 0.3s ease-out'
          }}
        />
      </div>
    </div>
  );
}; 
