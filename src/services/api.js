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
  const response = axios.get(`${BASE_URL}/instructor`, config);

  return response;
}

function viewsIncrement(id, token){
  const config = createConfig(token);
  const response = axios.post(`${BASE_URL}/tests/${id}`, {}, config);

  return response;
}

function getNamesOptions(name, token){
  const config = createConfig(token);
  const response = axios.get(`${BASE_URL}/input_options/${name}`, config);

  return response;
}

function createNewTest(body, token){
  const config = createConfig(token);
  const response = axios.post(`${BASE_URL}/create_test`, body, config);

  return response;
}

const api = {
  register,
  login,
  getAllTests,
  getInstructorTests,
  viewsIncrement,
  getNamesOptions,
  createNewTest
}

export default api;