import axios from 'axios'

const API_URL = 'http://localhost:5000/api/media/filter'
const getFilteredMedia = async(data)=>{
    const response = await axios.post(API_URL,data)
    return response.data

}

const mediaService = {
    getFilteredMedia
}

export default mediaService