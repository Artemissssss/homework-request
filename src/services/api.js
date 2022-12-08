import axios from 'axios'

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1'

export const Searcher = async (query) => {
    const response = await axios.get(`/search?query=${query}`);
    return response.data.hits;
}
