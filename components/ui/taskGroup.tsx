'use client'
import { CirclePlus } from 'lucide-react'
import { ComponentPropsWithoutRef, useState } from 'react'
import AsideContainer from './asideContainer'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { toggleAddTasks } from '@/lib/redux/slices/addTaskSlice'
import AddTask from '../layout/addTask'
import allTasks from '@/data/tasks.json'
import { task } from '@/app/page'
import Task from './task'
import { DndProvider } from 'react-dnd'
import { chooseDragTaskId } from '@/lib/redux/slices/dragSlice'

interface TaskGroupProps extends ComponentPropsWithoutRef<'section'> {
	groupId: number
	name: string
	tasks: task[]
}

export default function TaskGroup({ groupId, name, tasks, ...props }: TaskGroupProps) {
	const [Tasks, setTasks] = useState(tasks)
	const dispatch = useAppDispatch()

	return (
		<section
			className={'bg-DT_TextboxEText self-stretch justify-self-stretch rounded-2xl pb-6'}
			{...props}>
			<div
				role="group"
				className="flex justify-between items-center px-4.5 py-3 bg-DT_BacklLable rounded-t-2xl">
				<h2 className="text-2xl">{name}</h2>
				<button onClick={() => dispatch(toggleAddTasks())}>
					<CirclePlus />
				</button>
			</div>
			<ul className="px-3.5 flex flex-col gap-3 pt-3" onDragStart={()=>setTasks()}>
				{Tasks.map((task, index) => {
					return (
						<Task
							groupId={groupId}
							taskId={task.id - 1}
							title={task.title}
							description={task.description}
							assignee={task.assignee}
							key={`task_${task.id}`}
						/>
					)
				})}
			</ul>
		</section>
	)
}
