import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseStyles = 'font-montserrat font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 relative overflow-hidden';
  const sizeStyles = {
    sm: 'py-2 px-4 text-xs',
    md: 'py-2.5 px-6 text-sm',
    lg: 'py-3 px-8 text-base'
  };
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-white hover:shadow-[0_0_15px_rgba(41,168,255,0.5)] hover:scale-105',
    secondary: 'bg-transparent border-2 border-[#29A8FF] text-white hover:bg-[#29A8FF]/10 hover:shadow-[0_0_10px_rgba(41,168,255,0.3)]',
    outline: 'bg-transparent border border-gray-600 text-[#B0B0B0] hover:border-[#29A8FF] hover:text-white'
  };
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  return <button type={type} onClick={onClick} disabled={disabled} className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        ${widthStyles} 
        ${disabledStyles}
        ${className}
      `}>
      {children}
    </button>;
};