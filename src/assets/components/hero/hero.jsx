// eslint-disable-next-line
import { motion } from 'motion/react';
import './hero.scss'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation('hero');

    return(
        <section className='hero'>
            <video className='hero__video' autoPlay loop muted src="/src/assets/video/porvenir.mp4"></video>
            <motion.div 
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                className='hero__content'
            >
                <h2 className='hero__content-title'>{t('title')}</h2>
                <p className='hero__content-text'>{t('text')}</p>
            </motion.div>
        </section>
    )
}