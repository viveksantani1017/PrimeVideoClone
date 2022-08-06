import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import mediaService from './mediaService'

const initialState = {
    medias:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getMediaByType = createAsyncThunk('media/getmediatype', async(data,thunkApi)=>{
    try {
        return await mediaService.getMediaByType(data)
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
        .addCase(getMediaByType.pending,(state)=>{
            state.isLoading = true
          })
          .addCase(getMediaByType.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.medias = action.payload
          })
          .addCase(getMediaByType.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
          })

    }
 })

export const {reset} = mediaSlice.actions
export default mediaSlice.reducer