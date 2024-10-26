'use client'
import Navigation from '@/components/layout/navigation'
import Task from '@/components/ui/task'
import TaskGroup from '@/components/ui/taskGroup'
import FullTask from '@/components/layout/fulltask'
import { Provider } from 'react-redux'
import store from '@/lib/redux/store'
import taskGroups from '@/data/taskGroups.json'
import tasks from '@/data/tasks.json'
import { Reorder } from 'framer-motion'
import { useState } from 'react'
import AddTask from '@/components/layout/addTask'

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
			<div className="flex justify-center items-center h-min-screen sm:px-6 sm:py-7">
				<section className="bg-DT_WTBack w-full h-full sm:px-11 px-4 py-8 sm:rounded-3xl">
					<Navigation />
					<h1 className="font-bold sm:text-5xl text-4xl text-center py-6">Разработка</h1>
					<main
						className="w-full grid gap-8 lg:grid-cols-3"
						style={{gridTemplateRows:`repeat(${Math.ceil(taskGroups.length/3)},minmax(0,1fr))`}}
						>
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
