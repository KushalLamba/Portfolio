import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const validateEmailFormat = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmailFormat(formData.email)) {
            setError('Please enter a valid email format');
            return;
        }

        setIsSubmitting(true);

        // Wait for animation to complete (2s), then send
        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            const response = await fetch('https://formspree.io/f/mnjqbgej', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    className="contact-info-side"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-description">
                        Have an idea? <span>Let's build something amazing together.</span> Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-info-list">
                        <div className="contact-info-item">
                            <div className="contact-info-icon"><FiMail /></div>
                            <div>
                                <span className="contact-info-label">Email</span>
                                <a href="mailto:22raokushalyadav99@gmail.com" className="contact-info-value">
                                    22raokushalyadav99@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon"><FiPhone /></div>
                            <div>
                                <span className="contact-info-label">Phone</span>
                                <a href="tel:+917206966260" className="contact-info-value">+91 7206966260</a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon"><FiMapPin /></div>
                            <div>
                                <span className="contact-info-label">Location</span>
                                <span className="contact-info-value">Gurugram, Haryana, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials">
                        <span className="contact-socials-label">Connect with me</span>
                        <div className="contact-socials-row">
                            <a href="https://github.com/KushalLamba" target="_blank" rel="noopener noreferrer" className="contact-social-btn"><FaGithub /></a>
                            <a href="https://linkedin.com/in/kushallamba" target="_blank" rel="noopener noreferrer" className="contact-social-btn"><FaLinkedin /></a>
                            <a href="https://leetcode.com/u/kushalyadav22rao/" target="_blank" rel="noopener noreferrer" className="contact-social-btn"><SiLeetcode /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    className="contact-form-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                >
                    <h3 className="form-title">Send a Message</h3>

                    {error && (
                        <div className="form-error"><FiAlertCircle /> {error}</div>
                    )}

                    <div className="form-grid">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className={error.toLowerCase().includes('email') ? 'input-error' : ''} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                    </div>

                    <button type="submit" className={`form-button ${isSubmitting ? 'sending' : ''} ${isSubmitted ? 'success' : ''}`} disabled={isSubmitting || isSubmitted}>
                        {isSubmitting ? (
                            <span className="accelerating-dot">●</span>
                        ) : isSubmitted ? (
                            <><FiCheck /> Message Sent!</>
                        ) : (
                            <>Send Message</>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
