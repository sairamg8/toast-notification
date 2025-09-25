import { useEffect, useState } from "react";
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
  const [progress, setProgress] = useState(100);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setProgress((prev) => {
          const hundredthPart = 5000 / 100;

          const percent = 100 / hundredthPart;
          if (prev <= 0) {
            handleRemove();
            clearInterval(interval);
            return 0;
          }
          return prev - percent;
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isHovered]);

  function handleRemove() {
    const item = document.querySelector(`[data-toastid="${id}"]`);
    item?.classList.add("exit__toast");
    setTimeout(() => {
      if (onRemove) {
        onRemove(id);
      }
    }, 300);
  }

  const handleMouseOver = () => {
    setIsHovered(true);
    setProgress(100);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="toast"
      data-type={type}
      data-toastid={id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
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

        <div
          className="toast__progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
