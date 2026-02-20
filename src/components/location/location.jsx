import { motion } from 'motion/react';
import './location.scss';

export default function Location() {
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
                            Title
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__content-text'
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ducimus reiciendis adipisci sed beatae facere ea mollitia porro at? Doloribus totam sequi ab possimus autem odit iusto beatae nostrum tempora?
                        </motion.p>
                        <motion.p 
                            className='location__content-text'
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, tenetur cumque culpa obcaecati, tempora a illum soluta optio nesciunt modi voluptas sequi qui amet perferendis delectus quo sint mollitia voluptate!
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
                            <p className='location__info-text'>From Santa Marta</p>
                            <p className='location__info-text'>5mn</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__info-wrapper'
                        >
                            <p className='location__info-text'>From Barranquilla</p>
                            <p className='location__info-text'>30mn</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__info-wrapper'
                        >
                            <p className='location__info-text'>From Cartagena de Indias</p>
                            <p className='location__info-text'>2h</p>
                        </motion.div>
                    </div>
                </div>
                <motion.img 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0 }}
                    className='location__image' 
                    src="/src/assets/images/santamarta.jpg" 
                    alt="" 
                />
            </div>
        </section>
    )
}