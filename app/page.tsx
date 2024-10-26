'use client'
import Navigation from '@/components/layout/navigation'
import Task from '@/components/ui/task'
import TaskGroup from '@/components/ui/taskGroup'
import { ListFilter, Search, UserRound } from 'lucide-react'
import FullTask from '@/components/ui/fulltask'
import { Provider } from 'react-redux'
import store from '@/lib/redux/store'

export default function Home() {
	const TaskGroups = [
		{
			name: 'Backlog',
			tasks: [
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
			],
		},
		{
			name: 'In progress',
			tasks: [
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
			],
		},
		{
			name: 'Done',
			tasks: [
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
				{
					title: 'Внедрения Я.Метрики',
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					assignee: 'Фамилия И.О.',
				},
			],
		},
	]

	return (
		<Provider store={store}>
			<div className="flex justify-center items-center h-screen px-6 py-7">
				<section className="bg-DarkBGRD w-full h-full grid grid-rows-[max-content_max-content_auto] items-center px-11 py-8 rounded-3xl">
					<Navigation />
					<h1 className="font-bold text-5xl text-center py-6">Разработка</h1>
					<main
						className="w-full grid gap-8 self-stretch"
						style={{ gridTemplateColumns: `repeat(min(4,${TaskGroups.length}),minmax(0,1fr))` }}>
						{TaskGroups.map(({ name, tasks }) => {
							return (
								<TaskGroup
									name={name}
									key={name}
									tasks={tasks.map(({ title, description, assignee },index) => (
										<Task
											title={title}
											description={description}
											assignee={assignee}
											key={`${name}_${title}_${index}`}
										/>
									))}
								/>
							)
						})}
					</main>
				</section>
			</div>
		</Provider>
	)
}
