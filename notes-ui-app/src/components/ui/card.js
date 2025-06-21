import React from "react";
import "./../css/ui.css";

export function Card({ children, className = "" }) {
  return <div className={`custom-card ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return <div className={`custom-card-header ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`custom-card-content ${className}`}>{children}</div>;
}
