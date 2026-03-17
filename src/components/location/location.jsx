import { motion } from 'motion/react';
import './location.scss';

import minca from '../../assets/images/minca.jpg'
import santaMarta3 from '../../assets/images/santamarta3.jpg'
import river from '../../assets/images/fleuve.jpg'
import beach from '../../assets/images/plage.jpg'

export default function Location() {
    const images = [
        {
            image: santaMarta3,
            alt:"Centre historique de Santa Marta au crépuscule avec la mer des Caraïbes et les montagnes en arrière-plan"
        },
        {
            image: beach,
            alt:"Plage dans le parc national naturel de Tairona"
        },
        {
            image: river,
            alt:"Le fleuve Magdalena entouré de jungle tropicale près de Baranquilla en Colombie"
        },
        {
            image: minca,
            alt:"Plante tropicale devant une cascade dans la jungle de Minca"
        }
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