import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import mediaService, { getSearchedMedia } from '../media/mediaService'

const initialState = {
    searchMedia:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getsearchedmedia = createAsyncThunk('search/getsearchedmedia', async(data,thunkApi)=>{
    try {
        return await mediaService.getSearchedMedia(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})
 export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getsearchedmedia.pending,(state)=>{
            state.isLoading = true
          })
          .addCase(getsearchedmedia.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.searchMedia = action.payload
          })
          .addCase(getsearchedmedia.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
          })
    }
 })

export const {reset} = searchSlice.actions
export default searchSlice.reducer