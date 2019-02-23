import axios from 'axios';

export const searchRequest = async (value) => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=1977b733&s=${value}&type=movie`)
        .catch(err => console.log(err));
    return data;
}