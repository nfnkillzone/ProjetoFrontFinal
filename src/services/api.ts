import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://164.92.97.48:3000/api',
})