import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
    FaLinux, FaDatabase, FaCode, FaServer
} from 'react-icons/fa';
import {
    SiJavascript, SiMongodb, SiExpress, SiTailwindcss,
    SiRedux, SiPostman, SiCplusplus, SiVercel, SiRender, SiC
} from 'react-icons/si';

// Inverted pyramid in 3 lines: 7, 6, 5
const skillRows = [
    // Row 1 - 7 skills (top - widest)
    [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    ],
    // Row 2 - 6 skills (middle)
    [
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
    ],
    // Row 3 - 5 skills (bottom - narrowest)
    [
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'C', icon: <SiC />, color: '#A8B9CC' },
        { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
        { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
        { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
    ],
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="section-header">
                <div className="section-header">
                    <h2 className="section-title">Skills & Technologies</h2>
                </div>
            </div>

            {/* Inverted Pyramid - 3 Lines */}
            <div className="skills-pyramid">
                {skillRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="skill-row">
                        {row.map((skill, skillIndex) => (
                            <motion.div
                                key={skill.name}
                                className="skill-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: rowIndex * 0.1 + skillIndex * 0.05,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    borderColor: skill.color
                                }}
                            >
                                <span className="skill-box-icon" style={{ color: skill.color }}>
                                    {skill.icon}
                                </span>
                                <span className="skill-box-name">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
