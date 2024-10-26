'use client'
import Navigation from '@/components/layout/navigation'
import Task from '@/components/ui/task'
import TaskGroup from '@/components/ui/taskGroup'
import FullTask from '@/components/layout/fulltask'
import { Provider } from 'react-redux'
import store from '@/lib/redux/store'
import AddTask from '@/components/layout/addTask'
import taskGroups from '@/data/taskGroups.json'
import tasks from '@/data/tasks.json'
import { Reorder } from 'framer-motion'
import { useState } from 'react'

export interface task {
	id: number
	title: string
	description: string
	assignee: string
}

interface groupTask {
	groupId: number
	name: string
	tasksIds: number[]
}

export default function Home() {
	const TaskGroups = taskGroups.map(({ groupId, name, tasksIds }: groupTask) => {
		return {
			groupId,
			name,
			tasks: tasksIds.map(taskId => tasks[taskId - 1]),
		}
	})

	return (
		<Provider store={store}>
			<div className="flex justify-center items-center h-min-screen px-6 py-7">
				<section className="bg-DT_WTBack w-full h-full px-11 py-8 rounded-3xl">
					<Navigation />
					<h1 className="font-bold text-5xl text-center py-6">Разработка</h1>
						<main
							className="w-full grid gap-8"
							style={{ gridTemplateColumns: `repeat(min(4,${TaskGroups.length}),minmax(0,1fr))` }}>
							{TaskGroups.map(({ groupId, name, tasks }) => {
								return (
									<TaskGroup
										groupId={groupId}
										name={name}
										key={`group_${groupId}`}
										tasks={tasks}
									/>
								)
							})}
						</main>
				</section>
				<AddTask />
				<FullTask />
			</div>
		</Provider>
	)
}
