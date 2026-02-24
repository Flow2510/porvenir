import { motion } from 'motion/react';
import './location.scss';

export default function Location() {
    const images = [
        "/src/assets/images/santamarta2.jpg",
        "/src/assets/images/fleuve.jpg",
        "/src/assets/images/santamarta.jpg",
        "/src/assets/images/surf.jpg"
    ]

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
                            Explorez les environs
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='location__content-text'
                        >
                            Idéalement située à proximité des destinations les plus emblématiques de la côte caraïbe, notre auberge est le point de départ parfait pour découvrir la richesse culturelle et naturelle de la région. Entre plages paradisiaques, montagnes luxuriantes et villes dynamiques, chaque excursion promet une expérience unique.
                        </motion.p>
                        <motion.p 
                            className='location__content-text'
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            Que vous soyez amateur de nature, de détente ou d’aventure, tout est à portée de main pour enrichir votre séjour.
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
                            <p className='location__info-text'>Baranquilla</p>
                            <p className='location__info-text'>2h</p>
                        </motion.div>
                    </div>
                </div>
                <div className='location__gallery'>
                    {images.map((image, index) => (
                        <motion.img 
                            key={image + index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0 }}
                            className='location__gallery-image' 
                            src={image}
                            alt="" 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}