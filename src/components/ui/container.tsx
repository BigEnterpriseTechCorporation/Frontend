'use client'
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useTheme } from '@/context/ThemeContext'
interface ContainerProps extends ComponentPropsWithoutRef<"div">{
  children:ReactNode
}

export default function Container({children,className,...props}:ContainerProps){
  const { isDarkTheme } = useTheme()
  return (
		<div
			className={`${isDarkTheme ? 'bg-[#2E2E34]' : 'bg-[#FAFAFA] '} + ${className} px-[1.875rem] p-[0.625rem]  rounded-[10px]`}
			{...props}
		>
			{children}
		</div>
	)
}