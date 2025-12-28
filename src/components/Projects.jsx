import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaBook, FaLock, FaCreditCard } from 'react-icons/fa';

const projects = [
    {
        title: 'StudyNotion - EdTech Platform',
        description: 'A full-stack EdTech platform enabling users to create, consume, and rate educational content. Features secure payment processing, instructor management, and 99.5% security with Bcrypt.',
        technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Razorpay'],
        icon: <FaBook />,
        image: null,
        liveUrl: 'http://studynotionapp.tech/',
        githubUrl: 'https://github.com/KushalLamba'
    },
    {
        title: 'PayBand - Payment Solution',
        description: 'A modern payment solution application with secure transaction processing. Features seamless payment integration, user-friendly interface, and real-time transaction tracking.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'ESP32'],
        icon: <FaCreditCard />,
        image: null,
        liveUrl: 'https://pay-band-project-vcrs.vercel.app/',
        githubUrl: 'https://github.com/KushalLamba'
    },
    {
        title: 'Password Manager',
        description: 'A secure Password Manager with copy/edit/delete functionality. Prevents brute force attacks by generating unique passwords every time.',
        technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
        icon: <FaLock />,
        image: null,
        liveUrl: null,
        githubUrl: 'https://github.com/KushalLamba'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="project-thumbnail">
                            <div className="shimmer"></div>
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="project-image" />
                            ) : (
                                <div className="project-icon-container">
                                    <span className="project-icon">{project.icon}</span>
                                </div>
                            )}
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FiGithub /> Code
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FiExternalLink /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
