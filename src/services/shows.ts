import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export const fetchShowsByTerm = (term: string, country = 'us' ) => {
    return api.get('/show', {
        params: { term, country }
    });
}

export default api