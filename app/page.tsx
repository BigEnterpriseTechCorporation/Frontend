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
	taskId: number
	title: string
	description: string
	assignee: string
}

export interface groupTask {
	groupId: number
	name: string
	tasksIds: number[]
}

export default function Home() {
	return (
		<Provider store={store}>
			<div className="flex justify-center items-center h-min-screen px-6 py-7">
				<section className="bg-DT_WTBack w-full h-full px-11 py-8 rounded-3xl">
					<Navigation />
					<h1 className="font-bold text-5xl text-center py-6">Разработка</h1>
					<main
						className="w-full grid gap-8"
						style={{ gridTemplateColumns: `repeat(3,minmax(0,1fr))` }}>
						{
							taskGroups.map(({groupId,name,tasksIds})=>{
								return(
									<TaskGroup key={`taskGroup_${groupId}`} groupId={groupId} name={name} tasksIds={tasksIds}/>
								)
							})
						}
					</main>
				</section>
				<AddTask />
				<FullTask />
			</div>
		</Provider>
	)
}
