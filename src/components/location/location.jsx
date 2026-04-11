import { motion } from 'motion/react';
import './location.scss';

export default function Location({ images, title, text1, text2 }) {

    return(
        <section className='location'>
            <div className='location__wrapper'>
                <div className='location__content'>
                    <div className='location__content-wrapper'>
                        <motion.h2 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__content-title'
                        >
                            {title}
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__content-text'
                        >
                            {text1}
                        </motion.p>
                        <motion.p 
                            className='location__content-text'
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {text2}
                        </motion.p>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='location__line'>
                    </motion.div>
                    <div className='location__info'>
                        <motion.div 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__info-wrapper'
                        >
                            <p className='location__info-text'>Santa Marta</p>
                            <p className='location__info-text'>10mn</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__info-wrapper'
                        >
                            <p className='location__info-text'>Minca</p>
                            <p className='location__info-text'>20mn</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__info-wrapper'
                        >
                            <p className='location__info-text'>Taganga</p>
                            <p className='location__info-text'>35mn</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__info-wrapper'
                        >
                            <p className='location__info-text'>Parc national naturel de Tairona</p>
                            <p className='location__info-text'>45mn</p>
                        </motion.div>
                    </div>
                </div>
                <div className='location__gallery'>
                    {images.map((i, index) => (
                        <motion.img 
                            key={i.image + index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0 }}
                            className='location__gallery-image' 
                            src={i.image}
                            alt={i.alt} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}