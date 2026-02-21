import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';
import profileImage from '../assets/profile.jpg';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // As user scrolls past the About section, the image moves down slightly for a parallax effect
    const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section id="about" className="section about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
                <div className="about-content">
                    <motion.div
                        className="about-text glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                    >
                        <p>
                            Hello! My name is <strong>Jaya Deep Sai Chaganti</strong> and I enjoy creating things that live on the internet.
                            My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, I've had the privilege of deeply immersing myself in the React ecosystem.
                            My main focus these days is building accessible, inclusive products and digital experiences.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="about-tech-list">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>HTML & CSS/SCSS</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="about-image-wrapper"
                        style={{ y: imageY }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-image glass-panel">
                            <img src={profileImage} alt="Jaya Deep Sai Chaganti" className="profile-img" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
