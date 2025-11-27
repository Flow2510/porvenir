import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import './footer.scss'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line
import { motion } from 'motion/react'

export default function Footer() {
    const { t } = useTranslation('common')

    return(
        <motion.footer 
            initial={{ y: 50 }} 
            whileInView={{ y: 0 }} 
            viewport={{ once: true, amount: 0 }} 
            transition={{ duration: 0.5 }}
            className='footer'
        >
            <NavLink className='footer__logo'>
                <motion.img
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__logo-image' 
                    src={logo} 
                    alt="Logo Del Porvenir" 
                />
                <motion.h1
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__logo-title'
                >
                    {t('siteTitle')}
                </motion.h1>
            </NavLink>
            <div className='footer__content'>
                <motion.h4
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__content-title'
                >
                    {t('title')}
                </motion.h4>
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__content-text'
                >
                    <i className="fa-solid fa-phone"></i>+57 777-777-7777
                </motion.p>
                <motion.a
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__content-link' 
                    target='__blank' 
                    href="https://www.google.com/maps/place/L'auberge/@11.1848498,-74.1445472,1073m/data=!3m2!1e3!4b1!4m15!1m5!3m4!2zMTHCsDExJzA1LjUiTiA3NMKwMDgnMzEuMSJX!8m2!3d11.1848611!4d-74.1419722!3m8!1s0x8ef4f74899669bdf:0x3fe90b6e05e6d50d!5m2!4m1!1i2!8m2!3d11.1848445!4d-74.1419723!16s%2Fg%2F11ycgxc6k3?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                >
                    <i className="fa-solid fa-location-dot"></i>Santa Marta, Magdalena, Colombie
                </motion.a>
            </div>
            <div className='footer__social'>
                <motion.a
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__social-link' 
                    href="https://www.facebook.com" 
                    target='__blank'
                >
                    <i className="fa-brands fa-facebook"></i>
                </motion.a>
                <motion.a
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__social-link' 
                    href="https://www.instagram.com" 
                    target='__blank'
                >
                    <i className="fa-brands fa-instagram"></i>
                </motion.a>
                <motion.a
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.5 }}
                    className='footer__social-link'
                    href="https://www.whatsapp.com"
                    target='__blank'
                >
                    <i className="fa-brands fa-whatsapp"></i>
                </motion.a>
            </div>
        </motion.footer>
    )
}