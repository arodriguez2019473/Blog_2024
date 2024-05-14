import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3001/blog/v1/',
    timeout: 5000
})

export const comentario = async (data) => {
    try {
        return await apiClient.post('/A/comentario', data)
    } 
    catch (e) {
        
    }
}