import axios from "axios";

const authorsAPI = axios.create({ baseURL: 'http://localhost:8000/authors' });

async function getAutores() {
    const response = await authorsAPI.get('?limit=100');

    return response.data;
}

async function getLivrosPorAutores(id){
    const response = await authorsAPI.get(`/${id}/books`)
}


export {
    getAutores,
    getLivrosPorAutores
}