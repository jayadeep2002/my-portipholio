import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import bannerImage from '../assets/banner.png';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const bannerScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } }
    };

    return (
        <section id="home" className="hero section" ref={ref}>
            <div className="hero-banner-container">
                <motion.div
                    className="hero-banner-wrapper"
                    style={{ scale: bannerScale, y: bannerY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <img src={bannerImage} alt="Jaya Deep Sai Chaganti Banner" className="hero-banner-img" />
                </motion.div>
            </div>
            <motion.div
                className="container hero-content"
                style={{ opacity: textOpacity, y: textY }}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.p variants={itemVariants} className="hero-greeting">Hi, my name is</motion.p>
                <motion.h1 variants={itemVariants} className="hero-name">Jaya Deep Sai Chaganti.</motion.h1>
                <motion.h2 variants={itemVariants} className="hero-title">I build things for the web.</motion.h2>
                <motion.p variants={itemVariants} className="hero-description">
                    I'm a passionate fresher specializing in building exceptional digital experiences using React.
                    Currently focused on creating modern, accessible, and user-centric web applications.
                </motion.p>
                <motion.div variants={itemVariants} className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn">Contact Me</a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
