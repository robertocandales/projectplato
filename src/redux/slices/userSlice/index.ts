import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserList } from 'config/DTOs/usersTypes'
import UserService from 'config/services/UserServices'

export const getUsers = createAsyncThunk('user/getUsers', async (_, { rejectWithValue }) => {
    try {
        const res: UserList[] = await UserService.getUsers()
        return res
    } catch (error: unknown) {
        const message: string = (error as Error).message
        return rejectWithValue(message as string)
    }
})

interface IinitialState {
    users: UserList[]
    isloading: boolean
    error: {
        isError: boolean
        message: string
    }
}

const initialState: IinitialState = {
    users: [],
    isloading: false,
    error: {
        isError: false,
        message: '',
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                return { ...state, isloading: true, error: { isError: false, message: '' } }
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                return {
                    ...state,
                    users: action.payload,
                    isloading: false,
                    error: { isError: false, message: '' },
                }
            })
            .addCase(getUsers.rejected, (state, action) => {
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

export default userSlice.reducer
