

import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'? 'https://sajadkiani.vercel.app/api' : 'http://localhost:3000/api'
})

export default instance;