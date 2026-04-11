import { NavLink } from 'react-router-dom';
import './footer.scss';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation("footer")

    return(
        <footer className='footer'>
            <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='footer__content'
            >
                <div 
                    className={`footer__logo`}
                >
                    <h1 className='footer__logo-line1'>Auberge <span>del</span></h1>
                    <h1 className='footer__logo-line2'>Porvenir</h1>
                </div>
                <p className='footer__content-subtitle'>
                    <span>Carretera vereda el Porvenir, Via a Minca</span>
                    <span>Santa Marta, Magdalena</span>
                    <span>Colombia</span>
                </p>
                <div className='footer__social'>
                    <a target='_blank' className='footer__social-link' href="https://www.whatsapp.com/">
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                    <a target='_blank' className='footer__social-link' href="https://www.facebook.com/">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a target='_blank' className='footer__social-link' href="https://www.instagram.com/">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a target='_blank' className='footer__social-link' href="https://www.instagram.com/">
                        <i className="fa-brands fa-blogger"></i>
                    </a>
                </div>
            </motion.div>
            <motion.nav 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='footer__nav'
            >
                <NavLink className={'footer__nav-link'} to={'/'}>{t("nav.link_1")}</NavLink>
                <NavLink className={'footer__nav-link'} to={'/rooms'}>{t("nav.link_2")}</NavLink>
                <NavLink className={'footer__nav-link'} to={'/about'}>{t("nav.link_3")}</NavLink>
                <NavLink className={'footer__nav-link'} to={'/reservation'}>{t("nav.link_4")}</NavLink>
                <NavLink className={'footer__nav-link'} to={'/contact'}>{t("nav.link_5")}</NavLink>
            </motion.nav>
            <motion.iframe
                title='Map'
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='footer__map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44806.456244488814!2d-74.16737595869242!3d11.184308218453607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f74899669bdf%3A0x3fe90b6e05e6d50d!2sL&#39;auberge!5e1!3m2!1sfr!2sfr!4v1771548072172!5m2!1sfr!2sfr"
                loading="lazy"
                allowFullScreen
            ></motion.iframe>
            <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='footer__info'
            >
                <p className='footer__info-text'>© {new Date().getFullYear()}{t("subtitle")} </p>
                <a
                    className='footer__info-link'
                    href="https://sendraflorian.netlify.app/"
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label="Site conçu par Sendra Florian"
                >
                   @ Crédits
                </a>
            </motion.div>
        </footer>
    )
}