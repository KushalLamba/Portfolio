import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

const experiences = [
    {
        role: 'Software Developer',
        company: 'Bluestock Fintech',
        location: 'Remote',
        duration: 'Feb 2025 - Mar 2025',
        type: 'Internship',
        description: [
            'Developed a startup–investor platform that connects startups with suitable investors based on domain and funding interests',
            'Implemented features for auto-generating personalized email outreach, crafting investment memo templates, and improving the efficiency of fundraising workflows'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
        role: 'Campus Ambassador',
        company: 'Coding Ninjas',
        location: 'LM Thapar',
        duration: 'May 2023 - Oct 2023',
        type: 'Ambassador',
        description: [
            'Established and led a coding community on campus to address the lack of peer learning platforms, fostering a culture of collaboration',
            'Mentored students in their coding journey and guided them towards essential learning resources'
        ],
        technologies: ['Leadership', 'Event Management', 'Marketing', 'Community Building']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="section-header">
                <p className="section-label">My Journey</p>
                <h2 className="section-title">Work Experience</h2>
            </div>

            <div className="experience-content">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="experience-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="exp-header">
                            <div>
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                            </div>
                            <span className="exp-badge">{exp.type}</span>
                        </div>

                        <div className="exp-meta">
                            <span><FiCalendar size={14} /> {exp.duration}</span>
                            <span><FiMapPin size={14} /> {exp.location}</span>
                        </div>

                        <ul className="exp-description">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className="exp-tech">
                            {exp.technologies.map((tech) => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
