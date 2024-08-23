import axios from 'axios'

const API_URL = 'http://localhost:3000/api/';

const getUsuarios = () => {
  return axios.get(`${API_URL}/usuarios`)
}

export default {
  getUsuarios
}