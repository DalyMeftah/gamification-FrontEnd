import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import AuthForm from './AuthForm';
import { login } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleLogin = async (data: any) => {
    try {
      const response = await login(data);
      authLogin(response);
      toast.success('Login successful!');
      navigate('/home', { replace: true });
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      console.error('Login failed:', error);
    }
  };

  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <AuthForm onSubmit={handleLogin} fields={fields} submitText="Login" />
    </motion.div>
  );
};

export default Login;
