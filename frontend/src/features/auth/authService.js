import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user'

const register = async(userData) => {
    return await axios.post(API_URL, userData)
}

const login = async(userData) => {
    const response = await axios.post(API_URL + '/Login', userData)
    if (!response.data.token) {
        return response.data.messege
    } else {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register,
    login
}
export default authService