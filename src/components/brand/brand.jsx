import { motion } from 'motion/react';
import './brand.scss';

import beach from '../../assets/video/jungle-beach.mp4';

export default function Brand() {
    return(
        <section className='brand'>
            <div className='brand__content'>
                <motion.div 
                    className={`brand__logo`}
                    initial={{ opacity: 0, scale:0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <h1 className='brand__logo-line1'>Auberge <span>del</span></h1>
                    <h1 className='brand__logo-line2'>Porvenir</h1>
                </motion.div>
            </div>
            <motion.video 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='brand__image' 
                src={beach}
                alt="" 
                autoPlay
                muted
                loop
            />
        </section>
    )
}