import { createSlice } from '@reduxjs/toolkit'
import { Tasks } from 'config/DTOs/tasksTypes'
import { getTasks } from 'redux/slices/tasksSlice/thunkActions'

interface IinitialState {
    tasks: Tasks[]
    isloading: boolean
    taskByUser: Tasks[]
    error: {
        isError: boolean
        message: string
    }
}

const initialState: IinitialState = {
    tasks: [],
    isloading: false,
    taskByUser: [],
    error: {
        isError: false,
        message: '',
    },
}

export const tasksSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        filterByUser: (state, action) => {
            return {
                ...state,
                taskByUser: state.tasks.filter((task) => task.userId === action.payload),
            }
        },
        completedUserTask: (state, action) => {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.id && task.title === action.payload.value) {
                        return { ...task, completed: true }
                    }
                    return task
                }),
                taskByUser: state.taskByUser.map((task) => {
                    if (task.title === action.payload.value) {
                        return { ...task, completed: true }
                    }
                    return task
                }),
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.pending, (state) => {
                return { ...state, isloading: true, error: { isError: false, message: '' } }
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                builder.addCase(tasksSlice.actions.filterByUser, (state, action) => {
                    return { ...state, taskByUser: action.payload }
                })
                return {
                    ...state,
                    tasks: action.payload,
                    isloading: false,
                    error: { isError: false, message: '' },
                }
            })
            .addCase(getTasks.rejected, (state, action) => {
                const { payload } = action
                const errorMessage = payload as string
                return {
                    ...state,
                    error: { isError: true, message: errorMessage },
                    isloading: false,
                }
            })
    },
})
export const { filterByUser, completedUserTask } = tasksSlice.actions
export default tasksSlice.reducer
