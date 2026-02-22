import { NavLink } from 'react-router-dom'
import './hero.scss'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation("hero");

    return(
        <section className='hero'>
            <img className='hero__background' src="/src/assets/images/cabane-crepuscule.jpg" alt="" />
            <div className='hero__content'>
                <h1 className="hero__content-title"><span>{t("title.first")}</span><span>{t("title.second")}</span></h1>
                <NavLink className="hero__content-link">{t("link")}<span>→</span></NavLink>
            </div>
        </section>
    )
}