import Toast from "./Toast";
import type { ToastT } from "./type";

export default function ToastContainer({ toasts }: { toasts: ToastT[] }) {
  return (
    <>
      {toasts.map((t) => (
        <Toast
          cta={t.cta}
          description={t.description}
          id={t.id}
          onRemove={t.onRemove}
          position={t.position}
          title={t.title}
          type={t.type}
          key={t.id}
        />
      ))}
    </>
  );
}
