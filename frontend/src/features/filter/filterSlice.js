import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import mediaService from '../media/mediaService'

const initialState = {
    filterMedia:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getFilteredMedia = createAsyncThunk('filter/getfilteredmedia', async(data,thunkApi)=>{
    try {
        return await mediaService.getFilteredMedia(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})
 export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getFilteredMedia.pending,(state)=>{
            state.isLoading = true
          })
          .addCase(getFilteredMedia.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.filterMedia = action.payload
          })
          .addCase(getFilteredMedia.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
          })
    }
 })

export const {reset} = filterSlice.actions
export default filterSlice.reducer