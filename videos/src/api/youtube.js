import axios from 'axios';

<<<<<<< HEAD
const env = process.env.REACT_APP_KEY;

=======
const KEY = '';
>>>>>>> f606789a648d5e136928113e6118a58df0e9203d

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: env
    }
});
