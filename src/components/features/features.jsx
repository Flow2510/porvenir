import { motion } from 'motion/react';
import './features.scss';

const images = [
    "/src/assets/images/escalier-jungle.jpg",
    "/src/assets/images/terrasse.jpg",
    "/src/assets/images/chambre-volet.jpg"
]

const equipments = [
    "Wi-Fi gratuit dans tout l’établissement",
    "Restauration sur place, avec possibilité de profiter de repas faits maison",
    "Cuisine équipée, salle à manger et espace détente commun pour partager des moments conviviaux",
    "Piscine extérieure idéale pour se rafraîchir sous le soleil caribéen",
    "Vélos à disposition pour explorer les environs en toute liberté",
    "Patio et terrasse abritée, au cœur d’un jardin propice à la détente"
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
                    Détente et Liberté
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='features__content-subtitle'
                >
                    Tout est réuni pour vivre un séjour simple, confortable et apaisant.
                </motion.p>
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