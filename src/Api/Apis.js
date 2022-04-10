import Axios from 'axios';

const Apis = Axios.create({
  baseURL: 'http://localhost:5500/api',
});
export default Apis;
