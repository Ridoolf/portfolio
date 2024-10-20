import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";
import { Projects } from "../pages/projects/Projects";
import { Skills } from "../pages/skills/Skills";


export const menuRoutes = [
    {
        id: 'about',
        path: '/',
        Element: About 
    },
    {
        id: 'projects',
        path: '/projects',
        Element: Projects
    },
    {
        id: 'skills',
        path: '/skills',
        Element: Skills
    },
    {
        id: 'contact',
        path: '/contact',
        Element: Contact
    }
]