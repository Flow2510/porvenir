// eslint-disable-next-line
import { motion } from 'motion/react';
import ActivityCard from '../activitycard/activitycard';
import './activity.scss';

export default function Activity({title, text, activities }) {

    return(
        <section className='activity'>
            <div className='activity__content'>
                <motion.h3 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='activity__content-title'
                >
                    {title}
                </motion.h3>
                <motion.p 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='activity__content-text'
                >
                    {text}
                </motion.p>
            </div>
            <div className='activity__cards'>
                {activities.map((act, index) => (
                    <ActivityCard 
                        key={act.title + index}
                        title={act.title}
                        text={act.text}
                        source={act.source}
                        alt={act.alt}
                    />
                ))}
            </div>
        </section>
    )
}