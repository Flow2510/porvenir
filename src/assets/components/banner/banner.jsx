// eslint-disable-next-line
import { motion } from 'motion/react';
import './banner.scss';

export default function Banner({ source, alt, title }){
    return(
        <section className='banner'>
            <img
                className='banner__image' 
                src={source} 
                alt={alt} 
            />
            <div className='banner__content'>
                <motion.h2
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='banner__content-title'
                >
                    {title}
                </motion.h2>
            </div>
        </section>
    )
} 