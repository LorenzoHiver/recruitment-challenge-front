import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './';
import { motion } from 'framer-motion';

interface VictoryModalProps {
  rocketName: string;
  rocketImage: string;
}

const VictoryModal: React.FC<VictoryModalProps> = ({ rocketName, rocketImage }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Victoire ! 🎉</h2>
        <img
          src={rocketImage}
          alt={rocketName}
          className="w-32 h-32 object-contain mx-auto mb-4"
        />
        <p className="text-xl mb-6 text-blue-400">
          <span className="font-bold text-blue-500">{rocketName}</span> remporte la course !
        </p>
        <Button
          onClick={() => router.push('/')}
          className="w-full"
        >
          Nouvelle Course
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default VictoryModal; 