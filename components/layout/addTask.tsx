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
				className="flex items-center bg-DT_TextboxCont">
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
					className="flex flex-col">
					<Input
						className="min-h-4"
						type="text"
						name="title"
						value={title}
						placeholder='Заголовок задачи'
						onChange={e => setTitle(e.target.value)}
					/>
					<label>Описание</label>
					<EditBar />
					<div
						role="group"
						className="flex items-center gap-2">
						{assignees}
						<button
							type="button"
							onClick={() => addAssignee()}>
							<Plus />
						</button>
					</div>
				</div>
			</form>
		</AsideContainer>
	)
}
