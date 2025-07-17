
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

// Redirect to landing page
const Index = () => {
  // Redirect to landing page
  return <Navigate to={ROUTES.LANDING} replace />;
};

export default Index;
