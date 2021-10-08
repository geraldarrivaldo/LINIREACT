import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvirontmentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnvirontmentVariables = {
  BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvirontmentVariables : prodEnvirontmentVariables;
