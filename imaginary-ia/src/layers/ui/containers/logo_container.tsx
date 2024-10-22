import Image from 'next/image'
import {FC} from 'react'

interface LogoProps {
  //Props
}

export const Logo_Container : FC<LogoProps> = () => {
  return (
  <div>
    <Image src="/logo.png" alt="Imaginary Logo" width={100} height={100}/>
  </div>
  )
}
