import axios from 'axios'
import {BASE_URL} from '../services/config.js'


const http = axios.create({
    baseURL: BASE_URL
})

export default http