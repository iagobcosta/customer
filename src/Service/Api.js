import axios from 'axios'

export const legacy_baseUrl = axios.create({
    baseURL: 'http://23.23.53.241:8081',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const rest_baseUrl = axios.create({
    baseURL: 'http://teste.somacontadigital.com.br/scan-rest-2.30',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
