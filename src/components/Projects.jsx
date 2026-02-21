import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projectList = [
        {
            title: 'Face Expression Analyzer',
            description: 'A web application that analyzes facial expressions and reactions.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/jayadeep2002/Face-Expression',
            demo: 'https://jayadeep2002.github.io/Face-Expression/'
        },
        {
            title: 'Interactive Quiz Game',
            description: 'An interactive frontend quiz game built with vanilla JavaScript.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/jayadeep2002/quiz-game',
            demo: 'https://jayadeep2002.github.io/quiz-game/'
        },
        {
            title: 'Word Puzzle Game',
            description: 'A word association and puzzle game that challenges users to guess the correct words.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/jayadeep2002/word-game',
            demo: 'https://jayadeep2002.github.io/word-game/'
        },
        {
            title: 'Tech Game',
            description: 'A technology-themed interactive web game focusing on foundational frontend concepts.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/jayadeep2002/Tech-Game',
            demo: 'https://jayadeep2002.github.io/Tech-Game/'
        },
        {
            title: 'Rock Paper Scissors',
            description: 'A classic Rock, Paper, Scissors game featuring an engaging UI and AI opponent.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/jayadeep2002/RPS--Game',
            demo: 'https://jayadeep2002.github.io/RPS--Game/'
        },
        {
            title: 'Event Details Page',
            description: 'A responsive landing page displaying comprehensive details about upcoming events.',
            tech: ['CSS', 'HTML'],
            github: 'https://github.com/jayadeep2002/Event',
            demo: 'https://jayadeep2002.github.io/Event/'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 12 } }
    };

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    Some Things I've Built
                </motion.h2>
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projectList.map((project, index) => (
                        <motion.div key={index} variants={itemVariants} className="project-card glass-panel">
                            <div className="project-content">
                                <div className="project-header">
                                    <div className="folder-icon">📁</div>
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noreferrer" aria-label="External Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    </div>
                                </div>
                                <h3 className="project-title"><a href={project.demo} target="_blank" rel="noreferrer">{project.title}</a></h3>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                            </div>
                            <ul className="project-tech-list">
                                {project.tech.map((techItem, i) => (
                                    <li key={i}>{techItem}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
