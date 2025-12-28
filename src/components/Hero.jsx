import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode, FiArrowRight } from 'react-icons/fi';
import developer3D from '../assets/developer-3d.png';

const Hero = () => {
    const nameLetters = "Kushal Yadav".split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12 }
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="wave-emoji" style={{ display: 'inline-block', fontSize: '3rem' }}>👋</span>
                    </motion.p>

                    <motion.h1
                        className="hero-name"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {nameLetters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={letter === " " ? "space" : "letter"}
                                whileHover={{
                                    scale: 1.2,
                                    color: "#c9a66b",
                                    transition: { duration: 0.1 }
                                }}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="hero-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Software Developer
                    </motion.p>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        Crafting scalable web applications with clean, efficient code.
                        Driven by a problem-solving mindset and a love for building things that work.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <a href="#projects" className="btn-primary">
                            View Projects <FiArrowRight />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        <a href="https://github.com/KushalLamba" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/lambakushal/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiLinkedin size={20} />
                        </a>
                        <a href="https://leetcode.com/u/22raokushalyadav99/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiCode size={20} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="avatar-container avatar-3d">
                        <motion.img
                            src={developer3D}
                            alt="3D Developer Character"
                            className="developer-3d-image"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
