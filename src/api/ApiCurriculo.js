import axios from 'axios';

const apiCurriculo = axios.create({
    // baseURL: 'https://backend-curriculyan.herokuapp.com'
    baseURL: 'http://localhost:8080'
});

export default apiCurriculo;