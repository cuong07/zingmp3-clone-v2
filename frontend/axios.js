import axios from "axios";


const request = axios.create({
    baseURL: 'https://localhost:5000/api',
    withCredentials: true
})

export default request