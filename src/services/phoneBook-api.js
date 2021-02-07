import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

export default async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}
