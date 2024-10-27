import { cn } from '@/utils/css'
import { ComponentPropsWithoutRef } from 'react'

interface CommentProps extends ComponentPropsWithoutRef<'div'> {
	author: string
	text: string
}

export default function Comment({ author, text, ...props }: CommentProps) {
	return (
		<div
			className={cn('bg-DT_TextboxCont', 'self-stretch', 'mb-4 sm:mb-0', 'sm:rounded-3xl rounded-2xl', 'p-3')}
			{...props}>
			<h4 className={cn("text-lg","mb-1")}>{author}</h4>
			<h5 className="text-sm">{text}</h5>
		</div>
	)
}
