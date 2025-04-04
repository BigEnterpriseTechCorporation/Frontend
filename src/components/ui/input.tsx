import { ComponentPropsWithoutRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends ComponentPropsWithoutRef<"input">{}

export default function Input({className,...props}:InputProps){
  return (
    <input className={className+" "+"bg-nero border-[0.5px] border-sand rounded-md h-7 pl-2 placeholder:text-silver"} {...props}/>
  )
}