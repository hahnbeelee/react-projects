import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a103f10b9ad27925d593db2f5c049beda782c083a147f25db241529a0dbe85f0'
    }
});