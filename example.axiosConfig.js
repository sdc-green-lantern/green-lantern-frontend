import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp',
});

axiosConfig.defaults.headers.common.Authorization = '**YOUR_AUTH_TOKEN**';

export const IMGBB_API_KEY = '**YOUR_IMBBB_API_KEY**';
export default axiosConfig;
