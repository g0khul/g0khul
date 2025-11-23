import { Project } from '../types';

// Placeholder projects - replace with your actual projects later
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce API',
    description: 'A RESTful API for an e-commerce platform with authentication, product management, and order processing.',
    image: 'https://via.placeholder.com/600x400?text=E-commerce+API',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    codeLink: 'https://github.com/username/project',
    liveLink: 'https://project-demo.com',
  },
  {
    id: '2',
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat application with rooms, private messaging, and file sharing capabilities.',
    image: 'https://via.placeholder.com/600x400?text=Chat+App',
    stack: ['Socket.io', 'React', 'Node.js', 'PostgreSQL'],
    codeLink: 'https://github.com/username/project',
    liveLink: 'https://project-demo.com',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'Full-stack task management system with team collaboration, notifications, and analytics.',
    image: 'https://via.placeholder.com/600x400?text=Task+Manager',
    stack: ['TypeScript', 'Next.js', 'Prisma', 'Redis'],
    codeLink: 'https://github.com/username/project',
  },
];
