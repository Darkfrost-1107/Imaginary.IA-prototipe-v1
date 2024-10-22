import {FC} from 'react'

interface Button_Props {
  label: string
  onClick: () => void
  className? : string
}

export const Button_Container : FC<Button_Props> = ({onClick, label, className}) => {
  className = className || ""
  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  )
}
