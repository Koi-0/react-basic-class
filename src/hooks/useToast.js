import { create } from "zustand";

export const useToast = create((set) => ({
  toasts: [],
  addToast: (message) => {
    set((prevState) => {
      const toastId = crypto.randomUUID();

      return {
        toast: [
          ...prevState.toasts,
          {
            id: toastId,
            message,
          },
        ],
      };
    });
  },
  removeToast: (toastId) => {
    set((prevState) => ({
      toast: prevState.toasts.filter((prevToast) => prevToast.id !== toastId),
    }));
  },
}));
