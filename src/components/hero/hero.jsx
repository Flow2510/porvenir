import { NavLink } from 'react-router-dom'
import './hero.scss'
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function Hero() {
    const { t } = useTranslation("hero");

    return(
        <section className='hero'>
            <img className='hero__background' src="/src/assets/images/cabane-crepuscule.jpg" alt="" />
            <motion.div 
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 70}}
                transition={{ duration: 0.5}}
                className='hero__content'
            >
                <h1 className="hero__content-title"><span>{t("title.first")}</span><span>{t("title.second")}</span></h1>
                <NavLink className="hero__content-link">{t("link")}<span>→</span></NavLink>
            </motion.div>
        </section>
    )
}