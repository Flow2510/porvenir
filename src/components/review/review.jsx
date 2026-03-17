import { motion } from 'motion/react';
import './review.scss';

export default function Review({ text, name, info, stars, link }) {
    return(
        <a 
            className='review__wrapper' 
            href={link} 
            target='_blank'
            rel="noopener noreferrer"
        >
            <motion.article 
                className='review'
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            >
            <p className='review__text'>
                <i>
                    {text}
                </i>
            </p>
            <div className='review__line'></div>
            <div className='review__profile'>
                <div className='review__profile-wrapper'>
                    <p className='review__profile-name'>{name}</p>
                    <p className='review__profile-info'>{info}</p>
                </div>
                <div className='review__rating'>
                    {[...Array(stars)].map((_, index) => (
                        <i key={index} className="fa-solid fa-star"></i>
                    ))}
                </div>
            </div>
        </motion.article>
        </a>
    )
}