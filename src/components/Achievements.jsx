import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaDatabase, FaMedal } from 'react-icons/fa';

const achievements = [
    {
        title: 'Code Crusader',
        platform: 'Code 360',
        description: 'Earned prestigious badge for consistent problem solving',
        icon: <FaTrophy />,
        color: '#c9a66b'
    },
    {
        title: '1300+ Problems',
        platform: 'All Platforms',
        description: 'Solved 1300+ problems across LeetCode, GFG, and other platforms',
        icon: <FaCode />,
        color: '#b87333'
    },
    {
        title: 'SQL Badge',
        platform: 'LeetCode',
        description: 'Earned SQL proficiency badge demonstrating database expertise',
        icon: <FaDatabase />,
        color: '#c9a66b'
    },
    {
        title: 'Top 1% Coder',
        platform: 'Coding Ninjas',
        description: 'Achieved Top 1% ranking among all coders on Coding Ninjas',
        icon: <FaMedal />,
        color: '#d4af37'
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <div className="section-header">
                <h2 className="section-title">Achievements</h2>
            </div>

            <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.title}
                        className="achievement-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="achievement-icon-wrapper" style={{ '--icon-color': achievement.color }}>
                            <div className="achievement-icon-glow"></div>
                            <span className="achievement-icon">{achievement.icon}</span>
                        </div>
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-platform">{achievement.platform}</p>
                        <p className="achievement-description">{achievement.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
