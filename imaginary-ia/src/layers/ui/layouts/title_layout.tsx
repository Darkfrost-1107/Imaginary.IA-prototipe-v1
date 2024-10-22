import {FC} from 'react'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export const Title_Layout : FC<LayoutProps> = ({className, children}) => {
  className = className || ""
  
  return (
    <div className={className}>
      {children}
    </div>
  )
}
