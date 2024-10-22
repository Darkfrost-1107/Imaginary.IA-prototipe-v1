import {FC} from 'react'

interface TitleProps {
  title: string
  className?: string
}

export const Title_Component : FC<TitleProps> = ({title, className}) => {
  className = className || ""
  
  return (
    <h1 className={className}>
      {title}
    </h1>
  )
}

export const Subtitle_Component : FC<TitleProps> = ({title, className}) => {
  className = className || ""
  
  return (
    <h1 className={className}>
      {title}
    </h1>
  )
}
