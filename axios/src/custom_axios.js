import axios from 'axios';

const instance = axios.create({
    baseURL: "https://vue-axios-7e4a5.firebaseio.com",
    headers: {
        "Accepts": "application/json"
    }
});

export default instance;
