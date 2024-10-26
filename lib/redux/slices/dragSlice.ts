import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface state {
	choosedDragTaskId: number
  prevGroupId:number
  toGroupId:number
}

const initialState: state = {
	choosedDragTaskId: 1,
  prevGroupId:1,
  toGroupId:1
}

export const drag = createSlice({
	name: 'addTasks',
	initialState,
	reducers: {
		chooseDragTaskId: (state, action: PayloadAction<{taskId:number,prevGroupId:number}>) => {
			return {
				...state,
				choosedDragTaskId: action.payload.taskId,
        prevGroupId: action.payload.prevGroupId,
			}
		},
    chooseToGroupId: (state, action: PayloadAction<number>)=>{
      return{
        ...state,
        toGroupId: action.payload
      }
    }
	},
})

export const { chooseDragTaskId,chooseToGroupId } = drag.actions

export const selectChoosedDragTaskId = (state: RootState) => state.drag.choosedDragTaskId
export const selectPrevGroupId = (state: RootState) => state.drag.prevGroupId
export const selectToGroupId = (state: RootState) => state.drag.toGroupId


export default drag.reducer
