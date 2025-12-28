import { motion } from 'framer-motion';
import { FiBook } from 'react-icons/fi';

const About = () => {
    const stats = [
        { number: '1300+', label: 'Problems Solved' },
        { number: '8.56', label: 'CGPA' },
        { number: '3+', label: 'Projects' }
    ];

    return (
        <section id="about" className="about-section">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
            </div>

            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="about-timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Turning complex problems into <span>scalable, efficient solutions.</span></h3>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Prioritizing <span>patience and structure</span> to understand <span>why things break.</span></h3>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Valuing <span>consistency over intensity</span>, driven by <span>discipline and honest effort.</span></h3>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Thriving on <span>ownership</span> and <span>building things the right way.</span></h3>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="about-right-column">
                    <motion.div
                        className="education-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="edu-icon">
                            <FiBook color="white" size={24} />
                        </div>
                        <h4 className="edu-degree">B.E. in Computer Science</h4>
                        <p className="edu-institution">Thapar Institute of Engineering and Technology</p>
                        <p className="edu-details">Patiala, Punjab • 2022 - 2026</p>
                        <span className="edu-gpa">CGPA: 8.56/10</span>
                    </motion.div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
