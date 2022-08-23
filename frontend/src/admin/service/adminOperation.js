import axios from 'axios'

const API_URL = 'http://localhost:5000/api/media/'

const getAll = async() => {
    var response = await axios.get(API_URL)
    return response
}

const getMediadetails = async(id) => {
    const response = await axios.get(API_URL + 'getdetails/' + id)
    return response.data
}

const updateMediaDetails = async(id, data) => {
    const response = await axios.put(API_URL + id, data)
    return response.data
}

const delelteMedia = async(id) => {
    const response = await axios.delete(API_URL + id)
    return response.data
}

const addMediaData = async(media) => {
    const response = await axios.post(API_URL, media)
    console.log(response.data)
}

const operations = {
    getAll,
    getMediadetails,
    updateMediaDetails,
    delelteMedia,
    addMediaData
}

export default operations;