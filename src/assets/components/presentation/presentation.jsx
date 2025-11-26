import { NavLink } from 'react-router-dom';
import './presentation.scss';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function Presentation({ title, text1, text2, link1, linkText1, link2, linkText2, images }) {
    return(
        <section className='presentation'>
            <div className='presentation__content'>
                <motion.h2 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='presentation__content-title'
                >
                    {title}
                </motion.h2>
                <motion.p 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='presentation__content-text'
                >
                    {text1}
                </motion.p>
                <motion.p 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='presentation__content-text'
                >
                    {text2}
                </motion.p>
                <div className='presentation__content-wrapper'>
                    <motion.NavLink 
                        initial={{ y: 50 }} 
                        whileInView={{ y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.5 }}
                        className="presentation__content-link" 
                        to={link1}
                    >
                        {linkText1}
                    </motion.NavLink>
                    <motion.NavLink 
                        initial={{ y: 50 }} 
                        whileInView={{ y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.5 }}
                        className="presentation__content-link" 
                        to={link2}
                    >
                        {linkText2}
                    </motion.NavLink>
                </div>
            </div>
            <div className='presentation__gallery'>
                {images.map((image, index) => (
                    <motion.img 
                        initial={{ y: 50 }} 
                        whileInView={{ y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.5 }}
                        className='presentation__gallery-image' 
                        key={image.name + index} 
                        src={image.source} 
                        alt={image.alt} 
                    />
                ))}
            </div>
        </section>
    )
}