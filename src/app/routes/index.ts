
import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogRoutes } from '../modules/blogs/blog.route';
import { ProjectRoutes } from '../modules/projects/project.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path : '/project',
    route: ProjectRoutes
  }
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;