import axios from 'axios';

export const fetchAllQuestions = () => {
    return axios.get('/api/questions');
}

export const fetchAllData = () => {
    return axios.get('/api/dataclasses');
}