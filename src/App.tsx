import { useRef } from "react";
import toastService from "./toast/ToastService";
import ToastProvider from "./toast/ToastProvider";

export default function App() {
  const id = useRef(0);

  function triggerNotification() {
    toastService.sendToast({
      title: `Test ${id.current++}`,
      position: "bottom-right",
    });
  }

  return (
    <>
      <button onClick={triggerNotification}>Show Toast</button>
      <ToastProvider>Something else</ToastProvider>
    </>
  );
}
