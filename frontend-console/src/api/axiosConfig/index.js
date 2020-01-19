import { APIRoutes } from '../../routes';

export default {
  defaultAxiosConfig: {
    baseURL: APIRoutes.BASE_API_URL,
    timeout: 5000,
    validateStatus: ((status) => status >= 200 && status < 300),
  },
};
