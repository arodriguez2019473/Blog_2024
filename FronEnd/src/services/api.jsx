import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.31.1:3000/blog/v1/',
    timeout: 5000
})

export const comentario = async (data) => {
    try {
        return await apiClient.post('/A/comentario', data)
    } 
    catch (e) {
        
    }
}