import { NavLink } from 'react-router-dom';
import './cta.scss';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function Cta({ title, text, linkUrl1, linkUrl2, linkText1, linkText2 }) {
    return(
        <motion.section 
            initial={{ y: 50 }} 
            whileInView={{ y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.5 }}
            className='cta'
        >
            <motion.div 
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                className='cta__content'
            >
                <h3>{title}</h3>
                <p>{text}</p>
                <div className='cta__content-wrapper'>
                    <NavLink className="cta__content-link" to={linkUrl1}>{linkText1}</NavLink>
                    <NavLink className="cta__content-link" to={linkUrl2}>{linkText2}</NavLink>
                </div>
            </motion.div>
        </motion.section>
    )
}