import { motion } from 'motion/react';
import './cta.scss';
import { NavLink } from 'react-router-dom';

export default function Cta({ title, text, link, to }) {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <motion.h2
                    className='cta__content-title'
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {title}
                </motion.h2>
                <motion.p 
                    className='cta__content-text'
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {text}
                </motion.p>
            </div>
            <motion.div
                className='cta__link-wrapper'
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <NavLink 
                    to={to}
                    className='cta__link'
                >
                    <p>{link}</p> <span>→</span>
                </NavLink>
            </motion.div>
        </section>
    )
}