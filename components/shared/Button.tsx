import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  children: ReactNode
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold
    transition-all duration-300
    hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-offset-2
    cursor-pointer
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  const variants = {
    primary: `
      bg-[#571244] text-white
      border border-[#571244]
      hover:bg-[#6A1A4F]
      focus:ring-[#571244]
      rounded-[4px]
    `,
    secondary: `
      bg-[#EF4353] text-white
      border border-[#EF4353]
      hover:bg-[#D63A4A]
      focus:ring-[#EF4353]
      rounded-[4px]
    `,
    outline: `
      bg-transparent text-[#571244]
      border-2 border-[#571244]
      hover:bg-[#571244] hover:text-white
      focus:ring-[#571244]
      rounded-[4px]
    `,
    white: `
      bg-white text-[#571244]
      border border-white
      hover:bg-gray-100
      focus:ring-[#571244]
      rounded-[4px]
    `,
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-[14px] h-[36px]',
    md: 'px-4 py-2 text-[16px] h-[44px]',
    lg: 'px-6 py-3 text-[18px] h-[48px]',
  }

  const iconElement = icon ? (
    <span className="flex-shrink-0">{icon}</span>
  ) : null

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && iconElement}
      {children}
      {icon && iconPosition === 'right' && iconElement}
    </button>
  )
}