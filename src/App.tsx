import { useRef } from "react";
import { useToast } from "./toast/ToastProvider";

export default function App() {
  const createToast = useToast();
  const id = useRef(0);

  function triggerNotification() {
    createToast({ title: `Test ${id.current++}`, position: "bottom-right" });
  }

  return (
    <>
      <button onClick={triggerNotification}>Show Toast</button>
    </>
  );
}
