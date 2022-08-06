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

const mediaService = {
    getFilteredMedia,
    getMediaByType
}

export default mediaService