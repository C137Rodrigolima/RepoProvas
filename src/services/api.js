import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}
  
async function register(body) {
  await axios.post(`${BASE_URL}/register`, body);
}

function login(body) {
  const response = axios.post(`${BASE_URL}/`, body);

  return response;
}

function getAllTests(token) {
  const config = createConfig(token);
  const response = axios.get(`${BASE_URL}/tests`, config);

  return response;
}

function getInstructorTests(token) {
  const config = createConfig(token);
  const response = axios.get(`${BASE_URL}/tests/instructor`, config);

  return response;
}

const api = {
  register,
  login,
  getAllTests,
  getInstructorTests
}

export default api;