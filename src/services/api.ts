import axios from 'axios'

import data from '../../server.json'

const api = axios.create({
    baseURL: 'http://localhost:3333/'
})

export const getEpisodes = () => {
    return {
        data: data.seasons
    }
}

export default api