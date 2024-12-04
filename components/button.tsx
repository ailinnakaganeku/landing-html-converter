import React from 'react';
import { ArrowRight } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'contact'
  showArrow?: boolean
}

export function Button({ 
  children, 
  variant = 'primary', 
  showArrow = true,
  className = '', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`
        relative inline-flex items-center justify-center gap-2
        bg-[#00FF9D] text-black font-bold text-lg px-8 py-3 
        rounded-full border-[3px] border-black
        ${variant === 'primary' ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1' : 'hover:bg-[#00FF9D]/90'}
        transition-all duration-200
        ${className}
      `}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-5 h-5 ml-1" />
      )}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity rounded-full" />
      )}
    </button>
  )
}

