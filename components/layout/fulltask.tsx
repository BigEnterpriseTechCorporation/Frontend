import { AlignJustify, Menu, Pencil } from 'lucide-react'
import Link from 'next/link'
import Comment from '../ui/comment'
import AsideContainer from '../ui/asideContainer'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'

import tasks from '@/data/tasks.json'
import comments from '@/data/comments.json'

export default function FullTask() {
	const dispatch = useAppDispatch()
	const isFullTaskOpened = useAppSelector(state => state.fullTasks.isMenuOpened)
	const taskId = useAppSelector(state => state.fullTasks.choosedTaskId)
	const taskData = tasks[taskId]

	return (
		<AsideContainer
			rootClassName={!isFullTaskOpened ? 'hidden' : ''}
			className="!p-0 !h-4/5 !w-4/5 grid grid-rows-2">
			<section className="p-6 grid grid-rows-[max-content_auto_max-content]">
				<div className="flex justify-between">
					<h2 className="text-xl font-semibold">{taskData.title}</h2>
					<div className="flex gap-4.5">
						<button>
							<Pencil height={21} />
						</button>
						<button>
							<AlignJustify height={21} />
						</button>
					</div>
				</div>
				<p className="py-2 text-sm overflow-y-scroll">{taskData.description}</p>
				<h3 className="">{taskData.assignee}</h3>
			</section>
			<section className="p-6 bg-DT_WTBack rounded-b-2xl flex flex-col items-center gap-2">
				<div className="justify-between grid grid-cols-3 gap-6 w-full">
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
				<button className="text-center text-Blue bg-DT_TextboxCont py-1 px-4.5 rounded-full">Добавить комментарий</button>
			</section>
		</AsideContainer>
	)
}
