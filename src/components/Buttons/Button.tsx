import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outlined'; // Define variants if needed
  size?: 'small' | 'medium' | 'large'; // Define sizes if needed
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  className = '',
  variant = 'primary',
  size = 'medium',
  children,
}) => {
  // Define styles based on the variant and size
  const baseStyles = 'rounded-[5px] px-4 py-2 transition-colors duration-300';
  const variantStyles = {
    primary: 'bg-primary text-white border-transparent hover:bg-primary-dark',
    secondary: 'bg-secondary text-white border-transparent hover:bg-secondary-dark',
    outlined: 'border border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
  };
  const sizeStyles = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
