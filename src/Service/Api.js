import axios from 'axios'

var legacy_baseUrl = axios.create({
    baseURL: 'http://192.168.0.13:8084',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default legacy_baseUrl;