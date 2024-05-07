import axios from "axios";

const booksAPI = axios.create({ baseURL: 'http://localhost:8000/books' });

async function getLivros() {
    const response = await booksAPI.get('?limit=15');

    return response.data;
}
async function getLivrosPorID(id) {
    const response = await booksAPI.get(`/${id}`);
    return response.data;
}

async function getRecentsBooks(){
    const response = await booksAPI.get('/recents?limit=2')

    return response.data;
}

async function getAllBooks(){
    const response = await booksAPI.get('?limit=100');

    return response.data;
}

export {
    getLivros,
    getRecentsBooks,
    getLivrosPorID,
    getAllBooks
}