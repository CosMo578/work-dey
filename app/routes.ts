import { type RouteConfig, index } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  {
    path: 'register',
    file: 'routes/register.jsx', // Maps to "/register"
  },
] satisfies RouteConfig;
