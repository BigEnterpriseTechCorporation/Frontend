import { cn } from '@/utils/css'
import { ComponentPropsWithoutRef } from 'react'

interface AsideContainerProps extends ComponentPropsWithoutRef<'div'> {
	rootClassName?: string
	rootOnClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	children: React.ReactNode
	filter?: boolean;
}

export default function AsideContainer({ children, className, rootClassName, rootOnClick, onClick, filter, ...props }: AsideContainerProps) {
	return (
		<div
			className={cn(rootClassName,'fixed z-20 top-0 left-0', 'w-screen h-screen', 'bg-[rgba(4,4,4,0.6)]')}
			onClick={rootOnClick}>
			<div
				className={cn(className, 'p-6', 'bg-DT_Backl', filter ? 'rounded-2xl' : 'rounded-md', filter ? 'w-11/12 md:w-3/5' : 'w-11/12 md:w-3/4 sm:!h-[30%] !h-11/12', 'h-5/6')}
				{...props}
				onClick={onClick}>
				{children}
			</div>
		</div>
	)
}
