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

import { DragDropContext } from '@hello-pangea/dnd'

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
	const [groups, setGroups] = useState<{ [index: number]: groupTask }>(Object.assign({}, taskGroups))

	const onDragEnd = (result: { destination: any; source: any; draggableId: any }) => {
		const { destination, source, draggableId } = result

		if (!destination) {
			return
		}

		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return
		}

		const startTaskGroup = taskGroups[source.droppableId]
		const endTaskGroup = taskGroups[destination.droppableId]

		if (startTaskGroup === endTaskGroup) {
			const newTaskIds = startTaskGroup.tasksIds.splice(source.index, 1).splice(destination.index, 0, draggableId)

			const newGroup: groupTask = {
				...startTaskGroup,
				tasksIds: newTaskIds,
			}

			setGroups(prev => {
				return {
					...prev,
					[startTaskGroup.groupId - 1]: newGroup,
				}
			})
		}

		const startTaskIds = Array.from(startTaskGroup.tasksIds).splice(source.index, 1)
		const newStartGroup = {
			...startTaskGroup,
			taskIds: startTaskIds,
		}

		const endTaskIds = Array.from(endTaskGroup.tasksIds).splice(destination.index, 0, draggableId)
		const newEndGroup = {
			...endTaskGroup,
			taskIds: endTaskIds,
		}

		setGroups(prev => {
			return {
				...prev,
				[startTaskGroup.groupId - 1]: newStartGroup,
				[endTaskGroup.groupId - 1]: newEndGroup,
			}
		})
	}

	return (
		<Provider store={store}>
			<div className="flex justify-center items-center h-min-screen sm:px-6 sm:py-7">
				<section className="bg-DT_WTBack w-full h-full sm:px-11 px-4 py-8 sm:rounded-3xl">
					<Navigation />
					<h1 className="font-bold sm:text-5xl text-4xl text-center py-6">Разработка</h1>
					<DragDropContext onDragEnd={onDragEnd}>
						<main
							className="w-full grid gap-8 lg:grid-cols-3"
							style={{ gridTemplateRows: `repeat(${Math.ceil(taskGroups.length / 3)},minmax(0,1fr))` }}>
							{Object.values(groups).map(({ groupId, name, tasksIds }) => {
								return (
									<TaskGroup
										key={`taskGroup_${groupId}`}
										groupId={groupId}
										name={name}
										tasksIds={tasksIds}
									/>
								)
							})}
						</main>
					</DragDropContext>
				</section>
				<AddTask />
				<FullTask />
			</div>
		</Provider>
	)
}
