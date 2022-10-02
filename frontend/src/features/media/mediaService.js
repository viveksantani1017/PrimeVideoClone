import axios from 'axios'

const API_URL = 'http://localhost:5000/api/media/'

const getFilteredMedia = async(data)=>{
    const response = await axios.post(API_URL+'filter',data)
    return response.data
}

const getMediaByType = async(data)=>{
    const response = await axios.post(API_URL+data.type,data)
    return response.data
}

const getSearchedMedia = async(data)=>{
    const response = await axios.get(API_URL+"search",data)
    console.log(response.data)
    return response.data
}
const mediaService = {
    getFilteredMedia,
    getMediaByType,
    getSearchedMedia
}

export default mediaService