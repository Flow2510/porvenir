import { motion } from 'motion/react';
import './features.scss';

const images = [
    "/src/assets/images/escalier-jungle.jpg",
    "/src/assets/images/terrasse.jpg",
    "/src/assets/images/chambre-volet.jpg"
    
]

const equipments = [
    "equipment 1",
    "equipment 2",
    "equipment 3",
    "equipment 4",
    "equipment 5",
    "equipment 6"
]

export default function Features() {
    return(
        <section className='features'>
            <div className='features__content'>
                <motion.h2 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='features__content-title'
                >
                    Title
                </motion.h2>
                <ul className='features__content-list'>
                    {equipments.map((equipment, index) => (
                        <motion.li 
                            className='features__content-item' 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            key={equipment + index}
                        >
                            <span>→</span> {equipment}
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
        </section>
    )
}