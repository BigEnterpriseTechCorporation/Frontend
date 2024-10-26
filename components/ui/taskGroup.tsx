'use client'

import { groupTask } from '@/app/page'
import tasks from '@/data/tasks.json'
import { cn } from '@/utils/css'
import { CirclePlus } from 'lucide-react'
import { ComponentPropsWithoutRef } from 'react'
import Task from '@/components/ui/task'
import { useAppDispatch } from '@/lib/redux/hooks'
import { toggleAddTasks } from '@/lib/redux/slices/addTaskSlice'
import { Droppable } from '@hello-pangea/dnd'

interface TaskGroupProps extends ComponentPropsWithoutRef<'div'>, groupTask {}

export default function TaskGroup({ groupId, name, tasksIds, ...props }: TaskGroupProps) {
	const dispatch = useAppDispatch()

	return (
		<Droppable droppableId={`${groupId}`}>
			{(provided) => (
				<div
					className={cn('bg-DT_TextboxEText', 'rounded-2xl')}
					ref = {provided.innerRef}
					{...props}
					{...provided.droppableProps}
					>
					<div className={cn('flex justify-between items-center', 'bg-DT_BacklLable', 'rounded-t-2xl', 'py-3 px-4.5')}>
						<h3 className="text-2xl">{name}</h3>
						<button
							onClick={() => dispatch(toggleAddTasks())}
							className="h-1/2">
							<CirclePlus className="h-full" />
						</button>
					</div>
					<div className={cn('px-4.5 py-3', 'flex flex-col gap-3')}>
						{tasksIds.map((taskId,index) => {
							const task = tasks[taskId - 1]
							return (
								<Task
									key={`task_${taskId}`}
									index={index}
									taskId={taskId}
									title={task.title}
									description={task.description}
									assignee={task.assignee}
								/>
							)
						})}
					</div>
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}
