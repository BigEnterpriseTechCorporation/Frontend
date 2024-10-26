import Input from "@/components/ui/input";
import { cn } from "@/utils/css";
import { ComponentPropsWithoutRef } from "react";

interface LabelProps extends ComponentPropsWithoutRef<"label">{
	name:string
	type: string
	placeholder:string
}

export default function Label({name,type,placeholder}:LabelProps){
  return (
		<label className={cn('text-start', 'mb-1')}>
			<h2 className={cn('text-DT_Login text-sm', 'ml-1 pt-2')}>{placeholder}</h2>
			<Input
				className="w-full"
				type={type}
				name={name}
			/>
		</label>
	)
}