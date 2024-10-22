import {FC} from 'react'

interface TitleProps {
  title: string
  className?: string
}

export const Title_Container : FC<TitleProps> = ({title, className}) => {
  className = className || "text-4xl text-center"
  
  return (
    <h1 className={className}>
      {title}
    </h1>
  )
}

export const Subtitle_Container : FC<TitleProps> = ({title, className}) => {
  className = className || "text-2xl text-center"
  
  return (
    <h1 className={className}>
      {title}
    </h1>
  )
}
