import { ComponentPropsWithoutRef } from "react";

interface AsideContainerProps extends ComponentPropsWithoutRef<'div'> {
	rootClassName?: string
	rootOnClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	children: React.ReactNode
}

export default function AsideContainer({children,className,rootClassName,rootOnClick,onClick,...props}:AsideContainerProps){
  return (
		<div className={rootClassName+" absolute w-screen h-screen z-20 top-0 left-0 bg-[rgba(4,4,4,0.6)] flex justify-center items-center"} onClick={rootOnClick}>
			<div
				className={className + ' p-6 bg-BacklLable rounded-2xl'}
				{...props}
				onClick={onClick}
				>
				{children}
			</div>
		</div>
	)
}