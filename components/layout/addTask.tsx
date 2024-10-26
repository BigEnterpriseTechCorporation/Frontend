'use client'
import { toggleAddTasks } from '@/lib/redux/slices/addTaskSlice'
import AsideContainer from '../ui/asideContainer'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import Input from '../ui/input'
import { useEffect, useState } from 'react'
import { Plus, X } from 'lucide-react'

export default function AddTask() {
	const dispatch = useAppDispatch()
	const isAddTaskOpened = useAppSelector(state => state.addTasks.isMenuOpened)

  //? title label
  const [title,setTitle] = useState("")

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
				className="flex items-center bg-DarkContrastBGRD">
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
			rootClassName={!isAddTaskOpened ? 'hidden' : 'flex justify-center items-center'}
			rootOnClick={() => {
				dispatch(toggleAddTasks())
				setTitle('')
				setDescription('')
				setAssigneesData([''])
			}}
			onClick={e => {
				if (e && e.stopPropagation) e.stopPropagation()
			}}>
			<form className="grid grid-rows-[auto_max-content] h-full">
				<div
					role="group"
					className="grid grid-rows-[max-content_auto_max-content] gap-2">
					<Input
						type="text"
						name="title"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<label className="bg-DT_LPassBack grid grid-rows-[max-content_auto]">
						<div
							role="group"
							className="flex justify-between items-center p-2">
							<h3>**Описание задачи**</h3>
							<div role="group">
								<div className="flex gap-1 bg-DarkTextboxBG px-2 py-1 rounded-md">
									<button type="button">
										<h4
											className="font-black text-lg"
											onClick={() =>
												setFontStyles(prev => {
													return { ...prev, fontWeight: prev.fontWeight === 400 ? 700 : 400 }
												})
											}>
											ж
										</h4>
									</button>
									<button
										type="button"
										onClick={() =>
											setFontStyles(prev => {
												return { ...prev, fontStyle: prev.fontStyle === 'normal' ? 'italic' : 'normal' }
											})
										}>
										<h4 className="italic font-bold text-lg">к</h4>
									</button>
									<button
										type="button"
										onClick={() =>
											setFontStyles(prev => {
												return { ...prev, textDecorationLine: prev.textDecorationLine === 'none' ? 'underline' : 'none' }
											})
										}>
										<h4 className="underline font-bold text-lg">ч</h4>
									</button>
								</div>
							</div>
						</div>
						<textarea
							className="bg-transparent w-full h-full resize-none p-2"
							style={fontStyle}
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
					</label>

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
