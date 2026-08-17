const baseUrl = import.meta.env.BASE_URL;

const withBaseUrl = (path) => `${baseUrl}${path.replace(/^\/+/, '')}`;

const endpoints = {
  navbar: withBaseUrl('profile/navbar.json'),
  routes: withBaseUrl('profile/routes.json'),
  home: withBaseUrl('profile/home.json'),
  social: withBaseUrl('profile/social.json'),
  about: withBaseUrl('profile/about.json'),
  skills: withBaseUrl('profile/skills.json'),
  education: withBaseUrl('profile/education.json'),
  experiences: withBaseUrl('profile/experiences.json'),
  projects: withBaseUrl('profile/projects.json'),
};

export default endpoints;
