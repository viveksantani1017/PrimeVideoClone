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

export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const messege = (error.response && error.response.data && error.response.data.messege) || error.messege || error.toString()
        return thunkAPI.rejectWithValue(messege)
    }
})
//logout
export const logout = createAsyncThunk('auth/logout',
async(thunkAPI)=>{
  try {
    return await authService.logout()
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
        .addCase(login.pending,(state)=>{
            state.isLoading = true
          })
          .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user = action.payload
          })
          .addCase(login.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.message=action.payload
            state.user=null
          })
          .addCase(logout.pending,(state)=>{
            state.isLoading = true
          })
          .addCase(logout.fulfilled,(state)=>{
            state.user = null 
          })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer