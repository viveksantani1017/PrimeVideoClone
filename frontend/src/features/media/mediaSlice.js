import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import mediaService from './mediaService'

const initialState = {
    medias:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getFilteredMedia = createAsyncThunk('media/getfilteredmedia', async(data,thunkApi)=>{
    try {
        return await mediaService.getFilteredMedia(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})
 export const mediaSlice = createSlice({
    name:'media',
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
            state.medias = action.payload
          })
          .addCase(getFilteredMedia.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
          })

    }
 })

export const {reset} = mediaSlice.actions
export default mediaSlice.reducer