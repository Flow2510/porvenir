// eslint-disable-next-line
import { motion } from 'motion/react';
import './locationsintro.scss';

export default function LocationsIntro({title, text}) {
    return(
        <section className='locations-intro'>
            <div className='locations-intro__content'>
                <motion.h2 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='locations-intro__content-title'
                >
                    {title}
                </motion.h2>
                <motion.p 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='locations-intro__content-text'
                >
                    {text}
                </motion.p>
            </div>
        </section>
    )
}