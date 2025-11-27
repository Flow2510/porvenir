import { NavLink } from 'react-router-dom';
import './regioncard.scss';
// eslint-disable-next-line
import { motion } from 'motion/react';
const MotionNavLink = motion.create(NavLink);

export default function RegionCard( {source, alt, title, text, linkText, linkUrl} ) {
    
    return(
        <section className={`region-card`}>
            <motion.img
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                className={`region-card__image region-card__image--${title}`}
                src={source} 
                alt={alt} 
            />
            <div className="region-card__content">
                <motion.h3
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className="region-card__content-title"
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className="region-card__content-text"
                >
                    {text}
                </motion.p>
                <MotionNavLink 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    to={linkUrl} 
                    className="region-card__link"
                >
                    {linkText}
                </MotionNavLink>
            </div>
        </section>
    )
}