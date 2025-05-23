
import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogRoutes } from '../modules/blogs/blog.route';
import { ProjectRoutes } from '../modules/projects/project.route';
import { ExperienceRoutes } from '../modules/experience/experience.route';
import { EducationRoutes } from '../modules/education/education.route';
import { SkillRoutes } from '../modules/skills/skill.route';

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
  },
  {
    path: '/experience',
    route : ExperienceRoutes
  },
  {
    path: '/education',
    route: EducationRoutes
  },
  {
    path: '/skill',
    route: SkillRoutes
  }
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;