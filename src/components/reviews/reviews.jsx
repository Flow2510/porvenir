import { motion } from 'motion/react'
import Review from '../review/review'
import './reviews.scss'

export default function Reviews({ reviews, title, subtitle }) {
    return(
        <section className='reviews'>
            <div className='reviews__content'>
                <motion.h2 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='reviews__content-title'
                >
                    {title}
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='reviews__content-subtitle'
                >
                    {subtitle}
                </motion.p>
            </div>
            <div className='reviews__gallery'>
                {reviews.map((review, index) => (
                    <Review 
                        text={review.text}
                        key={review.name + index}
                        name={review.name}
                        info={review.info}
                        stars={review.stars}
                        link={review.link}
                    />
                ))}
            </div>
        </section>
    )
}