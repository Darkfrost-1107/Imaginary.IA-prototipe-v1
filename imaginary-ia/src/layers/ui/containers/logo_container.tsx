import Image from 'next/image'
import {FC} from 'react'

interface LogoProps {
  //Props
}

export const Logo_Container : FC<LogoProps> = () => {
  return (
  <div className="absolute top-0 left-0">
    <Image src="/image.png" alt="Imaginary Logo" width={100} height={100}/>
  </div>
  )
}
