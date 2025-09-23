import Toast from "./Toast";
import type { ToastT } from "./type";

export default function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: ToastT[];
  onRemove?: (id: string) => void;
}) {
  const position = toasts?.[0]?.position || "top-right";

  return (
    <div className="toast__container" data-position={position}>
      {toasts.map((t) => (
        <Toast
          cta={t.cta}
          description={t.description}
          id={t.id}
          onRemove={onRemove}
          position={t.position}
          title={t.title}
          type={t.type}
          key={t.id}
        />
      ))}
    </div>
  );
}
