import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ToastT } from "./type";
import ToastContainer from "./ToastContainer";
import toastService from "./ToastService";

const ToastContext = createContext<
  ({ title, description, type, cta, position }: Omit<ToastT, "id">) => void
>(() => {});

export const useToast = () => useContext(ToastContext);

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastT[]>([]);

  useEffect(() => {
    toastService.registerNotification(addNotification);
  }, []);

  function onRemove(id: string) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  const addNotification = useCallback(
    ({ title, description, type, cta, position }: Omit<ToastT, "id">) => {
      const obj = {
        title,
        description,
        type,
        cta,
        position,
        onRemove: () => {},
      };

      const id = new Date().getTime().toString();

      setToasts((prev) => {
        return [{ ...obj, id }, ...prev];
      });
    },
    []
  );

  return (
    <>
      <ToastContext.Provider value={addNotification}>
        {children}
        <ToastContainer
          key="toastContainer"
          toasts={toasts}
          onRemove={onRemove}
        />
      </ToastContext.Provider>
    </>
  );
}
