import ROUTES from '../../routes';

export default {
  defaultAxiosConfig: {
    baseURL: ROUTES.BASE_URL,
    timeout: 2000,
    validateStatus: ((status) => status >= 200 && status < 300),
  },
};
