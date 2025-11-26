import { NavLink } from 'react-router-dom';
import './location.scss';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function Location({ title, source, alt, textLocation, imagesList, link1, linkText1, link2, linkText2 }) {
    return(
        <section className='location'>
            <div className='location__content'>
                <motion.h3
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h3>
                <motion.img
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='location__content-image' 
                    src={source} 
                    alt={alt} 
                />
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                >
                    {textLocation}
                </motion.p>
            </div>
            <ul className='location__list'> 
                <motion.li
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                >
                    faire liste d'equipements
                </motion.li>
            </ul>
            <div className='location__link-wrapper'>
                <motion.NavLink 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className="location__link" 
                    to={link1}
                >
                    {linkText1}
                </motion.NavLink>
                <motion.NavLink 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className="location__link" to={link2}
                >
                    {linkText2}
                </motion.NavLink>
            </div>
            <div className='location__gallery'>
                {imagesList.map((img, index) => (
                    <motion.img
                        initial={{ y: 50 }} 
                        whileInView={{ y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.5 }}
                        key={img.name + index} 
                        className='location__gallery-image' 
                        src={img.source} 
                        alt={img.alt} 
                    />
                ))}
            </div>
        </section>
    )
}