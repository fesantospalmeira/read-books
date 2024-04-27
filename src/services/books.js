import axios from "axios";

const booksAPI = axios.create({ baseURL: 'http://localhost:8000/books?limit=15' });

async function getLivros() {
    const response = await booksAPI.get('/');

    return response.data;
}

export {
    getLivros
}