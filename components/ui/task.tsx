'use client'
import { task } from '@/app/page'
import { useAppDispatch } from '@/lib/redux/hooks'
import { chooseDragTaskId } from '@/lib/redux/slices/dragSlice'
import { chooseTaskId, toggleFullTasks } from '@/lib/redux/slices/fullTaskSlice'
import { cn } from '@/utils/css'
import { Draggable } from '@hello-pangea/dnd'
import { Menu } from 'lucide-react'
import { ComponentPropsWithRef } from 'react'

interface TaskProps extends ComponentPropsWithRef<'section'>, task {
	index: number
	taskId: number
	title: string
	description: string
	assignee: string
}

export default function Task({ index, taskId, title, description, assignee, ...props }: TaskProps) {
	const dispatch = useAppDispatch()

	function createShortDescription() {
		return description
			.slice(0, 150)
			.match(/[^\.!\?]+[\.!\?]+/g)
			?.map(sentence => sentence)
	}

	return (
		<Draggable
			draggableId={`${taskId}`}
			index={index}>
			{provided => (
				<section
					className={cn('bg-DT_Backl', 'px-3 py-2', 'rounded-xl', 'w-full h-min-[7.5rem]', 'grid grid-rows-[max-content_auto_max-content]')}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					>
					<div className={cn('flex justify-between items-center', 'mb-2')}>
						<h3 className="font-semibold">{index}</h3>
						<button
							type="button"
							onClick={() => {
								dispatch(toggleFullTasks())
								dispatch(chooseTaskId(taskId))
							}}>
							<Menu className="h-4.5" />
						</button>
					</div>
					<h2 className="mb-2">{createShortDescription()}</h2>
					<h2>{assignee}</h2>
				</section>
			)}
		</Draggable>
	)
}
