import React from "react";
import "./../css/ui.css";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`custom-input ${className}`}
      {...props}
    />
  );
}
