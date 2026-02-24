import { motion } from 'motion/react';
import './cta.scss';
import { NavLink } from 'react-router-dom';

export default function Cta() {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Title
                </motion.h2>
                <motion.p 
                    className='cta__content-text'
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi delectus magni vero exercitationem odit accusantium, voluptatem nihil earum saepe incidunt deserunt consectetur iusto error? Doloremque praesentium consectetur commodi deserunt sapiente.</motion.p>
            </div>
            <motion.div
                className='cta__link-wrapper'
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <NavLink 
                    className='cta__link'
                >
                    <p>Check Avaibility</p> <span>→</span>
                </NavLink>
            </motion.div>
        </section>
    )
}