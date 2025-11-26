// eslint-disable-next-line
import { motion } from 'motion/react'
import './activitycard.scss'

export default function ActivityCard({ title, text, source, alt }) {
    return(
        <article className='activity-card'>
            <motion.h4 
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                className='activity-card__title'
            >
                {title}
            </motion.h4>
            <motion.img 
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                className='activity-card__image' 
                src={source} 
                alt={alt}
            />
            <motion.p 
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                className='activity-card__text'
            >
                {text}
            </motion.p>
        </article>
    )
}