import { NavLink } from 'react-router-dom'
import './hero.scss'
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import background from '../../assets/images/cabane-crepuscule.jpg'

export default function Hero() {
    const { t } = useTranslation("hero");

    return(
        <section className='hero'>
            <img className='hero__background' src={background} alt='cabane au crepuscule dans la jungle'/>
            <motion.div 
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 70}}
                transition={{ duration: 0.5}}
                className='hero__content'
            >
                <div 
                    className={`hero__logo`}
                >
                    <h1 className='hero__logo-line1'>Auberge <span>del</span></h1>
                    <h1 className='hero__logo-line2'>Porvenir</h1>
                </div>
                <NavLink to={'/'} className="hero__content-link">{t("link")}<span>→</span></NavLink>
            </motion.div>
        </section>
    )
}