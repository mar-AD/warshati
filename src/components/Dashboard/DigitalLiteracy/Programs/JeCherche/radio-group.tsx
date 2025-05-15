"use client";

import { ReactNode } from "react";

export function RadioGroup({ value, onValueChange, children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

export function RadioGroupItem({ value, label }: { value: string; label: ReactNode }) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input type="radio" name="source" value={value} className="accent-blue-500" />
      <span>{label}</span>
    </label>
  );
}