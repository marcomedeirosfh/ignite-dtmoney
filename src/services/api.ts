import axios from 'axios'

const baseURL = process.env.REACT_APP_USE_MIRAGE 
                ? '/api' 
                : 'http://your-production-api-url.com/api';

export const api = axios.create({ baseURL });