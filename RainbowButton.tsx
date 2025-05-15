"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const RainbowButton = ({ 
  href, 
  className, 
  children, 
  ...props 
}: RainbowButtonProps) => {
  const buttonClasses = cn(
    "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
    className
  );

  const innerClasses = "inline-flex items-center justify-center w-full h-full rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl";

  const renderButton = () => (
    <button className={buttonClasses} {...props}>
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={innerClasses}>
        {children}
      </span>
    </button>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={innerClasses}>
          {children}
        </span>
      </Link>
    );
  }

  return renderButton();
}; 