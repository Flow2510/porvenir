// eslint-disable-next-line
import { motion } from 'motion/react';
import './intro.scss'
import { useTranslation } from 'react-i18next';

export default function Intro(){
    const { t } = useTranslation('intro');
    const images = [
        {
            source: '/src/assets/images/auberge.avif',
            alt: 'Auberge del porvenir'
        },
        {
            source: '/src/assets/images/auberge2.avif',
            alt: 'Auberge del porvenir'
        },
        {
            source: '/src/assets/images/jardin.avif',
            alt: "Jardin de l'ayberge del Porvenir"
        }        
    ]

    return(
        <section className='intro'>
            <div className='intro__content'>
                <motion.h2 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                >
                    {t('text')}</motion.p>
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                >
                    {t('text2')}
                </motion.p>
            </div>
            <div className='intro__gallery'>
                {images.map((image, index) => (
                    <motion.img 
                        initial={{ y: 50 }} 
                        whileInView={{ y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.5 }}
                        className='intro__gallery-image' 
                        key={image.source + index} 
                        src={image.source} 
                        alt={image.alt} 
                    />
                ))}
            </div>
        </section>
    )
}