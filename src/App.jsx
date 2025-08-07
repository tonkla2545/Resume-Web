import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <ToastContainer />
      <AppRoutes />
    </HelmetProvider>
  );
}

export default App
