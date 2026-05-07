import React, { forwardRef } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950'
    const variantStyles =
      variant === 'outline'
        ? 'border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50'
        : 'border-transparent bg-neutral-950 text-white hover:bg-neutral-800'

    return (
      <button ref={ref} className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
    )
  }
)

Button.displayName = 'Button'
