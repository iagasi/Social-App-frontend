import axios from "axios";

export const http=axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST
})

// axios.interceptors.response.use((response)=>response)