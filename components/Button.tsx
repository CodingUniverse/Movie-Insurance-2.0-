
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'highlight';
  size?: 'large' | 'medium' | 'small' | 'full';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  onClick,
  children,
  icon,
  className = '',
}) => {
  const baseStyles = "relative flex items-center justify-center font-bold transition-all duration-200 active:scale-[0.96] outline-none";
  
  const variants = {
    // Electric Blue Theme
    primary: "bg-[#0066FF] text-white hover:bg-[#0052CC] shadow-[0_8px_20px_rgba(0,102,255,0.3)] active:shadow-none",
    highlight: "bg-[#111827] text-white hover:bg-[#1f2937]", 
    secondary: "bg-[#F0F7FF] text-[#0066FF] border-[1px] border-[#0066FF] hover:bg-[#e0efff]",
    tertiary: "bg-white border-[1px] border-[#E5E7EB] text-[#4B5563] hover:bg-[#F5F7FA]",
    ghost: "bg-transparent text-[#9CA3AF] hover:bg-gray-100",
    danger: "bg-[#FF3B30] text-white hover:bg-[#e6352b]",
  };

  const sizes = {
    large: "h-[60px] px-8 rounded-xl text-lg",
    medium: "h-[52px] px-6 rounded-lg text-base",
    small: "h-[36px] px-4 rounded-md text-sm",
    full: "w-full h-[60px] rounded-xl text-lg",
  };

  const disabledStyles = disabled 
    ? "opacity-30 cursor-not-allowed active:scale-100 grayscale shadow-none" 
    : "cursor-pointer";

  return (
    <button
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          {icon}
          <span>{children}</span>
        </div>
      )}
    </button>
  );
};

export default Button;
