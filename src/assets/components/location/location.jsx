import { NavLink } from 'react-router-dom';
import './location.scss';
// eslint-disable-next-line
import { motion } from 'motion/react';
import Slider from '../slider/slider';
const MotionNavLink = motion.create(NavLink);

export default function Location({ title, source, alt, textLocation, imagesList, link1, linkText1, link2, linkText2, equipements }) {
    return(
        <section className='location'>
            <div className='location__content'>
                <motion.h3
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h3>
                <motion.img
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='location__content-image' 
                    src={source} 
                    alt={alt} 
                />
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    {textLocation}
                </motion.p>
            </div>
            <ul className='location__list'> 
                {equipements.map((e, index) => (
                    <motion.li 
                        key={e + index}
                        initial={{ y: 50 }} 
                        whileInView={{ y: 0 }} 
                        viewport={{ once: true, amount: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        {e}
                    </motion.li>
                ))}
            </ul>
            <div className='location__link-wrapper'>
                <MotionNavLink 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="location__link" 
                    to={link1}
                >
                    {linkText1}
                </MotionNavLink>
                <MotionNavLink 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="location__link" to={link2}
                >
                    {linkText2}
                </MotionNavLink>
            </div>
            <div className='location__gallery'>
                <Slider
                    images={imagesList}
                />
            </div>
        </section>
    )
}