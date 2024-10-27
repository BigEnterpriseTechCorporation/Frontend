'use client'
import { toggleAddTasks } from '@/lib/redux/slices/addTaskSlice'
import AsideContainer from '../ui/asideContainer'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import Input from '../ui/input'
import { useEffect, useState } from 'react'
import { Plus, X } from 'lucide-react'
import EditBar from '@/components/ui/editBar'

export default function AddTask() {
	const dispatch = useAppDispatch()
	const isAddTaskOpened = useAppSelector(state => state.addTasks.isMenuOpened)

	//? title label
	const [title, setTitle] = useState('')

	//? description label
	const [description, setDescription] = useState('')

	//? description formats
	const [fontStyle, setFontStyles] = useState({ fontWeight: 400, fontStyle: 'normal', textDecorationLine: 'none' })

	//? assignees label
	const [assigneesData, setAssigneesData] = useState([''])
	function changeAssigneeData(index: number, value: string) {
		setAssigneesData(prev => [...prev.slice(0, index), value, ...prev.slice(index + 1, prev.length)])
	}
	function addAssignee() {
		setAssigneesData(prev => [...prev, ''])
	}
	function removeAssignee(index: number) {
		setAssigneesData(prev => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)])
	}
	const assignees = assigneesData.map((value, index) => {
		return (
			<div
				key={`assignee_${index}`}
				className="grid grid-cols-[auto_max-content] items-center bg-DT_TextboxCont rounded-md px-2 py-2">
				<Input
					placeholder="Фамилия И.О."
					value={value}
					onChange={event => changeAssigneeData(index, event.target.value)}
				/>
				<button
					type="button"
					onClick={e => {
						if (e && e.stopPropagation) e.stopPropagation()

						removeAssignee(index)
					}}>
					<X />
				</button>
			</div>
		)
	})

	return (
		<AsideContainer
			rootClassName={!isAddTaskOpened ? 'hidden' : 'flex items-center justify-center'}
			rootOnClick={() => {
				dispatch(toggleAddTasks())
				setTitle('')
				setDescription('')
				setAssigneesData([''])
			}}
			onClick={e => {
				if (e && e.stopPropagation) e.stopPropagation()
			}}
			className="w-3/5 h-1/2">
			<form className="grid grid-rows-[auto_max-content] h-full">
				<div
					role="group"
					className="flex flex-col w-full overflow-x-hidden">
					<Input
						className="min-h-4 2sm:h-12 2sm:mb-4 sm:h-16"
						type="text"
						name="title"
						value={title}
						placeholder="Заголовок задачи"
						onChange={e => setTitle(e.target.value)}
					/>
					<h3 className=" text-xl">Описание</h3>
					<EditBar />
				</div>
				<div
					role="group"
					className="grid lg:grid-cols-3 2sm:grid-cols-2 grid-cols-1 items-center gap-2 w-full">
					{assignees}
					<button
						type="button"
						onClick={() => addAssignee()}>
						<Plus />
					</button>
				</div>
			</form>
		</AsideContainer>
	)
}
