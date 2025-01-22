import React from 'react';
import { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { Toast } from '../components/common/Toast';

interface ToastOptions {
  title?: string;
  description: string;
  status: 'success' | 'error' | 'info';
  duration?: number;
}

export const useToast = () => {
  const [toastContainer] = useState(() => {
    const container = document.createElement('div');
    container.setAttribute('id', 'toast-container');
    document.body.appendChild(container);
    return container;
  });

  const toast = useCallback(({ description, status, duration = 5000 }: ToastOptions) => {
    const toastRoot = createRoot(toastContainer);
    
    const handleClose = () => {
      toastRoot.unmount();
    };

    toastRoot.render(
      <Toast
        message={description}
        type={status}
        onClose={handleClose}
        duration={duration}
      />
    );
  }, [toastContainer]);

  return toast;
}; 