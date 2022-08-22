import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    success: false,
    isLoading: false,
    messege: ''
}

//Register
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const messege = (error.response && error.response.data && error.response.data.messege) || error.messege || error.toString()
        return thunkAPI.rejectWithValue(messege)
    }
})

export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const messege = (error.response && error.response.data && error.response.data.messege) || error.messege || error.toString()
        return thunkAPI.rejectWithValue(messege)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.success = false
            state.messege = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase((register, login).pending, (state => {
                state.isLoading = true
            }))
            .addCase((register, login).fulfilled, (state, action) => {
                state.isLoading = false
                state.success = true
                state.user = action.payload
            })
            .addCase((register, login).rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.messege = action.payload
                state.user = null
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer