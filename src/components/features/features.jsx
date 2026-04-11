import { motion } from 'motion/react';
import './features.scss';

import escalier from '../../assets/images/escalier-jungle.jpg'
import terrasse from '../../assets/images/terrasse.jpg'
import chambre from '../../assets/images/chambre-volet.jpg'
import auberge from '../../assets/images/maison-ciel.jpg'

const images = [
    auberge,
    escalier,
    terrasse,
    chambre,
]

export default function Features({ features, title, subtitle }) {
    return(
        <section className='features'>
            <div className='features__wrapper'>
                <div className='features__content'>
                    <motion.h2 
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='features__content-title'
                    >
                        {title}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='features__content-subtitle'
                    >
                        {subtitle}
                    </motion.p>
                    <ul className='features__content-list'>
                        {features.map((feature, index) => (
                            <motion.li 
                                className='features__content-item' 
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y:0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, amount: 0.5 }}
                                key={feature + index}
                            >
                                <span>→</span> {feature}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='features__gallery'
                >
                    {images.map((image, index) => (
                        <img className='features__gallery-image' src={image} key={image + index} alt="" />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}