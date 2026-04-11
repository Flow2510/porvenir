import { motion } from 'motion/react';
import './presentation.scss';

import videoGallery from '../../assets/video/terasse.mp4'

export default function Presentation({ images, title, subtitle }) {

    return(
        <section className='presentation'>
            <div className='presentation__content'>
                <motion.h2 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='presentation__content-title'
                >
                    {title}
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='presentation__content-subtitle'
                >
                    {subtitle}
                </motion.p>
            </div>
            <div className='presentation__gallery'>
                <video loop muted autoPlay className='presentation__gallery-video' src={videoGallery}></video>
                <div className='presentation__gallery-wrapper'>
                    {images.map((i, index) => (
                        <img className='presentation__gallery-image' src={i.image} key={index + i.image} alt={i.alt} />
                    ))}
                </div>
            </div>
        </section>
    )
}