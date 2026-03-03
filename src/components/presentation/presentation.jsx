import { motion } from 'motion/react';
import './presentation.scss';

import patio from "../../assets/images/patio.jpg"
import habitation from "../../assets/images/habitation.jpg"
import cabane from "../../assets/images/cabane-crepuscule.jpg"
import jardin from "../../assets/images/jardin-piscine.jpg"

const images = [
    patio,   
    habitation,
    cabane,
    jardin
]

export default function Presentation() {
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
                    Notre univers en images
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='presentation__content-subtitle'
                >
                    Plongez dans l’ambiance de votre prochaine escapade.
                </motion.p>
            </div>
            <div className='presentation__gallery'>
                <video loop muted autoPlay className='presentation__gallery-video' src="/src/assets/video/jungle.mp4"></video>
                <div className='presentation__gallery-wrapper'>
                    {images.map((image, index) => (
                        <img className='presentation__gallery-image' src={image} key={index + image} alt="" />
                    ))}
                </div>
            </div>
        </section>
    )
}