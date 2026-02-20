import { motion } from 'motion/react';
import './brand.scss';

export default function Brand() {
    return(
        <section className='brand'>
            <div className='brand__content'>
                <motion.h1 
                    initial={{ opacity: 0, scale:0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0 }}
                    className='brand__content-title'>LOGO</motion.h1>
            </div>
            <motion.img 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='brand__image' 
                src="/src/assets/images/cabane-crepuscule.jpg" 
                alt="" 
            />
        </section>
    )
}