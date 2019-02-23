import axios from 'axios';

export const movieRequest = async (value) => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=1977b733&i=${value}`)
        .catch(err => console.log(err));

    return data;
};
