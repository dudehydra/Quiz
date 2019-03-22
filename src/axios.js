import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://quiz-7e730.firebaseio.com/'
});

export default instance;