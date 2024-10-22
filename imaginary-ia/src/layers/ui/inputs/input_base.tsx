import { FC } from "react"
import { Input_Props } from "./types"

export const Input_Base : FC<Input_Props> = ({className, props, Component}) => {
  className = className || ""
  Component = Component || "input"
  return (
    <Component className={className} {...props}/>
  )
}