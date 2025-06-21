// src/components/ui/textarea.js
import React from "react";
import "./../css/ui.css";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`custom-textarea ${className}`}
      {...props}
    />
  );
}
