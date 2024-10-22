import Image from 'next/image'
import {FC} from 'react'

interface TextProps {
  //Props
  text: string | number
  className?: string
}

export const Text_Container : FC<TextProps> = ({text, className}) => {
  className = className || ""
  
  return (
  <div className={className}>
    {text}
  </div>
  )
}
