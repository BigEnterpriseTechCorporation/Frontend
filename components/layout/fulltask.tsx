import { AlignJustify, Menu, Pencil } from 'lucide-react'
import Link from 'next/link'
import Comment from '../ui/comment'
import AsideContainer from '../ui/asideContainer'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'

import tasks from '@/data/tasks.json'
import comments from '@/data/comments.json'
import { cn } from '@/utils/css'

export default function FullTask() {
	const dispatch = useAppDispatch()
	const isFullTaskOpened = useAppSelector(state => state.fullTasks.isMenuOpened)
	const taskId = useAppSelector(state => state.fullTasks.choosedTaskId)
	const taskData = tasks[taskId-1]

	return (
		<AsideContainer
			rootClassName={!isFullTaskOpened ? '!hidden' : 'flex justify-center items-center'}
			className={cn('!p-0', 'xl:!h-3/5 !w-4/5', 'grid grid-rows-2')}>
			<main className={cn('pt-6 px-6 pb-3', 'grid grid-rows-[max-content_auto_fit-content]')}>
				<div className="flex justify-between">
					<h2 className="text-xl font-semibold">{taskData.title}</h2>
					<div className="flex gap-4.5">
						<button>
							<Pencil height={18} />
						</button>
						<button>
							<AlignJustify height={20} />
						</button>
					</div>
				</div>
				<p className={cn('py-2', 'text-sm', 'overflow-y-scroll')}>{taskData.description}</p>
				<h3 className="">{taskData.assignee}</h3>
			</main>
			{
				//? Comments
			}
			<section className={cn('px-6 py-3', 'overflow-scroll sm:overflow-visible', 'bg-DT_WTBack', 'h-3/4', 'rounded-b-2xl', 'flex flex-col items-center gap-2')}>
				<div className={cn('sm:grid sm:grid-cols-3 sm:justify-between sm:gap-6', ' w-full')}>
					{taskData.comments.map(commentId => {
						const commentData = comments[commentId - 1]
						return (
							<Comment
								
								author={commentData.author}
								text={commentData.text}
								key={`comment_${commentId}`}
							/>
						)
					})}
				</div>
				<button className={cn('text-center text-Blue', 'bg-DT_TextboxCont', 'py-1 px-4.5', 'mt-4', ' rounded-full')}>Добавить комментарий</button>
			</section>
		</AsideContainer>
	)
}
