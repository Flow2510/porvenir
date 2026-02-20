import { motion } from 'motion/react';
import './stat.scss';

export default function Stat({number, subtitle}){
    return(
        <motion.article 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className='stat'
        >
            <span className='stat__number'>{number}</span>
            <p className='stat__subtitle'>{subtitle}</p>
        </motion.article>
    )
}