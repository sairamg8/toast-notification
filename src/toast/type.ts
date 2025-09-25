import type { ReactNode } from "react";

export interface ToastT {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "info" | "alert";
  cta?: ReactNode;
  onRemove?: undefined | ((id: string) => void);
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  pause?: boolean;
}
