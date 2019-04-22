import axios from 'axios';

const mainInstance = axios.create({
  baseURL: 'https://swapi.co/api/'
});

export default mainInstance;