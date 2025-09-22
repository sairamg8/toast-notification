import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { ToastT } from "./type";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext<ToastT>({
  id: "kj87as9823-sajk",
  cta: <button>Close</button>,
  description: "",
  position: "top-right",
  title: "",
  type: "alert",
  onRemove: () => {},
});

export const useToast = () => useContext(ToastContext);

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastT[]>([]);

  const addNotification = useCallback(
    ({ title, description, type, cta, position }: ToastT) => {
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
        <ToastContainer key="toastContainer" toasts={toasts} />
      </ToastContext.Provider>
    </>
  );
}
