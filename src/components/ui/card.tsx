import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement>

type CardContentProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className = '', ...props }: CardProps) {
  return <div className={`rounded-3xl bg-white ${className}`} {...props} />
}

export function CardContent({ className = '', ...props }: CardContentProps) {
  return <div className={`${className}`} {...props} />
}
