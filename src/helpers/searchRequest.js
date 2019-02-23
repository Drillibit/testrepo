import axios from 'axios';

export const searchRequest = async (value) => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=1977b733&t=${value}`)
        .catch(err => console.log(err));
    return data;
}