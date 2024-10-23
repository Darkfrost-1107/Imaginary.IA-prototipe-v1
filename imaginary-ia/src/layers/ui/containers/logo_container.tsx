import Image from 'next/image'
import {FC} from 'react'

interface LogoProps {
  //Props
}

export const Logo_Container : FC<LogoProps> = () => {
  return (
  <div className="absolute top-0 left-0">
    <a href="/">
      <Image src="/logo2.png" alt="Imaginary Logo" width={220} height={100}/>
    </a>
  </div>
  )
}
