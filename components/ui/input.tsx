import { cn } from "@/utils/css";
import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input">{}

export default function Input({className, ...props}:InputProps){
  return (
		<input
			className={cn('bg-DT_LPassBack','rounded-xs','h-7','px-2','duration-300 ease-in-out',className)}
			{...props}
		/>
	)
}