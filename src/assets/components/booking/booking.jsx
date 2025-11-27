// eslint-disable-next-line
import { motion } from 'motion/react';
import './booking.scss';

export default function Booking({title, href1, href2, linkText1, linkText2}){
    return(
        <section className='booking'>
            <div className='booking__content'>
                <motion.h4
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='booking__content-title'
                >
                    {title}
                </motion.h4>
                <motion.a
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className='booking__content-link' target='__blank' href={href1}
                >
                    <i className="fa-solid fa-b"></i>{linkText1}
                </motion.a>
                <motion.a
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className='booking__content-link' target='__blank' href={href2}
                >
                    <i className="fa-brands fa-airbnb"></i>{linkText2}
                </motion.a>
            </div>
        </section>
    )
}