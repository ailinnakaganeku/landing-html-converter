import React from "react";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "contact";
  showArrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  showArrow = true,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        relative inline-flex items-center justify-center gap-4
        bg-[#00FF9D] text-black text-md ${
          showArrow ? "pl-8 pr-4" : "px-8"
        } py-3 
        rounded-full border-[3px] border-black
        ${
          variant === "primary"
            ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            : "shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
        }
        transition-all duration-200
      `}
      {...props}
    >
      {children}
      {showArrow && (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#4ADE80] transition-transform group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </button>
  );
}
