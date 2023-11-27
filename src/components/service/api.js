import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'b849a1748fmshce966a10c81992dp17a805jsn4cbca749d5b3',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService = {
    async fetching(url) {
        const res = await axios.get(`${BASE_URL}/${url}`, options)
        return res.data
    }
}