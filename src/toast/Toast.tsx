import "./toast.css";

import type { ToastT } from "./type";

const imgSrc = {
  success: "/toast_icons/success.png",
  alert: "/toast_icons/alert.png",
  info: "/toast_icons/info.png",
};

export default function Toast({
  id,
  cta,
  description,
  onRemove,
  title,
  type = "success",
}: ToastT) {
  function handleRemove() {
    if (onRemove) {
      onRemove(id);
    }
  }

  return (
    <div className="toast" data-type={type} data-position={"bottom-right"}>
      {!!onRemove && (
        <button className="toast__close" onClick={handleRemove}>
          &times;
        </button>
      )}

      <div className="toast__content">
        <div className="toast__info">
          <img
            src={imgSrc[type] || imgSrc.info}
            alt="Alert"
            height={25}
            width={25}
          />
          <div className="toast-title-desc">
            <span>{title}</span>
            <span>{description}</span>
          </div>

          <div className="toast__cta">{cta}</div>
        </div>

        <div className="toast__progress"></div>
      </div>
    </div>
  );
}
