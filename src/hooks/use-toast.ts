// src/hooks/use-toast.ts
import toast from 'react-hot-toast';
import type { ToastOptions } from 'react-hot-toast';

export function useToast() {
  const showToast = (message: string, options?: ToastOptions) => {
    toast(message, options);
  };
  
  const successToast = (message: string) => {
    toast.success(message);
  };

  const errorToast = (message: string) => {
    toast.error(message);
  };
  
  return { showToast, successToast, errorToast };
}