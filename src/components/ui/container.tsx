import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"div">{
  children:ReactNode
}

export default function Container({children,className,...props}:ContainerProps){
  return (
		<div
			className={className + ' ' + 'px-[1.875rem] p-[0.625rem] bg-[#2E2E34] rounded-[10px]'}
			{...props}
		>
			{children}
		</div>
	)
}