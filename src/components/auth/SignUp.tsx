import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import AuthForm from './AuthForm';
import { signUp } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUp = async (data: any) => {
    try {
      const response: any = await signUp(data);
      login(response);
      toast.success('Sign up successful!');
      navigate('/home', { replace: true });
    } catch (error) {
      toast.error('Sign up failed. Please try again.');
      console.error('Sign up failed:', error);
    }
  };

  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <AuthForm onSubmit={handleSignUp} fields={fields} submitText="Sign Up" />
    </motion.div>
  );
};

export default SignUp;
