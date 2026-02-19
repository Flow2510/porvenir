import { NavLink } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    return(
        <footer className='footer'>
            <div className='footer__content'>
                <h1 className='footer__content-logo'>Logo</h1>
                <p className='footer__content-subtitle'>Subtitle text</p>
            </div>
            <nav className='footer__nav'>
                <NavLink className={'footer__nav-link'} to={'/'}>Home</NavLink>
                <NavLink className={'footer__nav-link'} to={'/rooms'}>Rooms</NavLink>
                <NavLink className={'footer__nav-link'} to={'/about'}>About</NavLink>
                <NavLink className={'footer__nav-link'} to={'/reservation'}>Reservation</NavLink>
                <NavLink className={'footer__nav-link'} to={'/localisation'}>Localisation</NavLink>
                <NavLink className={'footer__nav-link'} to={'/contact'}>Contact</NavLink>
            </nav>
            <div className='footer__info'>
                <p className='footer__info-text'>© Auberge del Porvenir</p>
                <p className='footer__info-text'>Santa Marta, Colombia</p>
            </div>
        </footer>
    )
}