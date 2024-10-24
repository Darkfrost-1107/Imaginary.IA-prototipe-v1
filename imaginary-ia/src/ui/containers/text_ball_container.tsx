import {FC} from 'react'

interface CProps {
  text: string | number
}

export const Text_Ball_Container : FC<CProps> = ({text}) => {
  return (
    <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-semibold shadow-lg">
      {text}
    </div>
  )
}
