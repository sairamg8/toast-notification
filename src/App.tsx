import ToastProvider, { useToast } from "./toast/ToastProvider";

export default function App() {
  const toast = useToast();

  return (
    <>
      <button onClick={}>Show Toast</button>
    </>
  );
}
