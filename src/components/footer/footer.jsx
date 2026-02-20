import { NavLink } from 'react-router-dom';
import './footer.scss';
import { motion } from 'motion/react';

export default function Footer() {
    return(
        <footer className='footer'>
            <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='footer__content'
            >
                <h1 className='footer__content-logo'>Logo</h1>
                <p className='footer__content-subtitle'>Subtitle text</p>
            </motion.div>
            <motion.nav 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='footer__nav'
            >
                <NavLink className={'footer__nav-link'} to={'/'}>Home</NavLink>
                <NavLink className={'footer__nav-link'} to={'/rooms'}>Rooms</NavLink>
                <NavLink className={'footer__nav-link'} to={'/about'}>About</NavLink>
                <NavLink className={'footer__nav-link'} to={'/reservation'}>Reservation</NavLink>
                <NavLink className={'footer__nav-link'} to={'/localisation'}>Localisation</NavLink>
                <NavLink className={'footer__nav-link'} to={'/contact'}>Contact</NavLink>
            </motion.nav>
            <motion.iframe
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
                <p className='footer__info-text'>© Auberge del Porvenir</p>
                <p className='footer__info-text'>Santa Marta, Colombia</p>
            </motion.div>
        </footer>
    )
}