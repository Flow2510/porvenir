import { useTranslation } from 'react-i18next';
import './header.scss'
import logo from "../../images/logo.png"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menuKeys = [
    'accueil', 
    'auberge', 
    'locations', 
    'activities',
    'contact', 
    'reservation'
];

export default function Header() {
    
    const { t, i18n } = useTranslation('common'); // 🎯 On charge le namespace 'common'
    const [showMenu, setShowMenu] = useState(false);

    // Logique pour basculer vers l'espagnol ou le français
    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'es' : 'fr';
        //  Met à jour la langue globalement
        i18n.changeLanguage(newLang); 
    };
    
    // Pour afficher la langue cible sur le bouton
    const getTargetLangDisplay = () => {
        return i18n.language === 'fr' ? 'Espagnol' : 'Français';
    };

    return(
        <>
            <header className='header'>
                <NavLink to={'/'} className='header__logo'>
                    <img className='header__logo-image' src={logo} alt="Logo Del Porvenir" />
                    <h1 className='header__logo-title'>{t('siteTitle')}</h1>
                </NavLink>
                <nav className='header__nav-desktop'>
                    {menuKeys.map(key => (
                        <a key={key} href={`/${key}`}>{t(`menu.${key}`)}</a> 
                    ))}
                </nav>
                <button 
                    className='header__language-desktop'
                    onClick={toggleLanguage}
                >
                    {getTargetLangDisplay()}
                </button>
                <button className='header__button' onClick={() => setShowMenu(prev => !prev)}>
                        {showMenu? <i className="fa-solid fa-bars-staggered"></i> : <i className="fa-solid fa-bars"></i>}
                </button>
            </header>
            <nav className={`header__nav-mobile${showMenu? " header__nav-mobile--active" : ""}`}>
                {menuKeys.map(key => (
                    <NavLink onClick={() => setShowMenu(false)} key={key} className="header__nav-link" to={`/${key}`}>{t(`menu.${key}`)}</NavLink> 
                ))}
                <div className='header__social'>
                    <a className='header__social-link' href="https://www.facebook.com" target='__blank'><i className="fa-brands fa-facebook"></i></a>
                    <a className='header__social-link' href="https://www.instagram.com" target='__blank'><i className="fa-brands fa-instagram"></i></a>
                    <a className='header__social-link' href="https://www.whatsapp.com" target='__blank'><i className="fa-brands fa-whatsapp"></i></a>
                </div>
                <button 
                    className='header__language-mobile'
                    onClick={toggleLanguage}
                >
                    {getTargetLangDisplay()}
                </button>
            </nav>
        </>
    );
}