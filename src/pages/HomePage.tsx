import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      {user && (
        <p className="text-xl">
          Hello, {user.firstName} {user.lastName}!
        </p>
      )}
    </motion.div>
  );
};

export default HomePage;
