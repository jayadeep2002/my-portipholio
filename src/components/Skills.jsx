import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillsList = [
        { name: 'React', category: 'Frontend', icon: '⚛️' },
        { name: 'JavaScript', category: 'Language', icon: '💛' },
        { name: 'HTML/CSS', category: 'Frontend', icon: '🎨' },
        { name: 'Node.js', category: 'Backend', icon: '🟢' },
        { name: 'ExpressJS', category: 'Backend', icon: '🚂' },
        { name: 'MongoDB', category: 'Database', icon: '🍃' },
        { name: 'Java', category: 'Language', icon: '☕' },
        { name: 'Python', category: 'Language', icon: '🐍' },
        { name: 'Git & GitHub', category: 'Tools', icon: '🐙' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    My Technical Skills
                </motion.h2>
                <div className="skills-content">
                    <motion.div
                        className="skills-description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p>
                            I've worked with a variety of technologies in the web development world.
                            From back-end to front-end, here's an overview of my technical expertise.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bento-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {skillsList.map((skill, index) => (
                            <motion.div key={index} variants={itemVariants} className="bento-card glass-panel">
                                <div className="bento-icon">{skill.icon}</div>
                                <div className="bento-info">
                                    <h3 className="bento-name">{skill.name}</h3>
                                    <span className="bento-category">{skill.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
