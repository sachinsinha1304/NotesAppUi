import React from "react";
import "./../css/ui.css";

export function Button({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  const variantClass = variant === "destructive" ? "destructive" : "";
  const sizeClass = size === "sm" ? "sm" : "";

  return (
    <button
      onClick={onClick}
      className={`custom-button ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
