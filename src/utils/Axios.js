import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: true,
})

export default Axios