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
<<<<<<< HEAD
				className={cn(className, filter ? 'p-6' : 'p-0', 'bg-DT_Backl', 'rounded-2xl', filter ? 'w-11/12 md:w-3/5' : 'w-11/12 md:max-w-[30%] sm:!h-[40%] ', 'h-5/6')}
=======
				className={cn(className, 'p-6', 'bg-DT_Backl', filter ? 'rounded-2xl' : 'rounded-none', filter ? 'w-11/12 md:w-3/5' : 'w-full max-h-[50%]', 'h-5/6 ')}
>>>>>>> 7fd205ce72b062a19ff6925f9b07586bc462306a
				{...props}
				onClick={onClick}>
				{children}
			</div>
		</div>
	)
}
