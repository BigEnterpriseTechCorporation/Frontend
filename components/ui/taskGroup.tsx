'use client'
import { CirclePlus } from 'lucide-react'
import { ComponentPropsWithoutRef, useState } from 'react'
import AsideContainer from './asideContainer'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { toggleAddTasks } from '@/lib/redux/slices/addTaskSlice'
import AddTask from '../layout/addTask'

interface TaskGroupProps extends ComponentPropsWithoutRef<'section'> {
	name: string
	tasks: React.ReactNode[]
}

export default function TaskGroup({ name, tasks, ...props }: TaskGroupProps) {
	const dispatch = useAppDispatch()
	const isAddTaskOpened = useAppSelector(state => state.addTasks.isMenuOpened)

	return (
		<section className={'bg-DarkTextboxExampleText h-full justify-self-stretch rounded-2xl'} {...props}>
			<div
				role="group"
				className="flex justify-between items-center px-4.5 py-3 bg-BacklLable rounded-t-2xl">
				<h2 className="text-2xl">{name}</h2>
				<button onClick={() => dispatch(toggleAddTasks())}>
					<CirclePlus />
				</button>
			</div>
			<ul className="px-3.5 flex flex-col gap-3 pt-3">
				{tasks &&
					tasks.map((task, index) => {
						return <li key={name + '_task_' + index}>{task}</li>
					})}
			</ul>
			<AddTask/>
		</section>
	)
}
