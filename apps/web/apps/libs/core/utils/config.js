const Env = process.env.REACT_APP_ENV || 'development';
export const isProd = Env === 'production';

const config = {
  ['development']: {
    BACKEND_API: 'ws://localhost:7333/',
  },
  ['production']: {
    BACKEND_API: 'ws://localhost:8333/',
  },
};

export default config[Env];
