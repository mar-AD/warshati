"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";


export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400",
        props.className
      )}
    />
  );
}