import { useState, useEffect } from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { t, i18n } = useTranslation("header")

    const languages = [
        {
            value: "fr",
            flag: "🇫🇷"
        },
        {
            value: "es",
            flag: "🇪🇸"
        },
        {
            value: "gb",
            flag: "🇬🇧"
        }
    ]

    const closeMenu = () => {
        setMenuIsOpen(prev => !prev)
    }

    const setLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return(
        <>
            <header className={`header${scrolled ? " header--scrolled" : ""}`}>
                <NavLink to={'/'} className={'header__logo-wrapper'}>
                    <div className={`header__logo
                        ${menuIsOpen ? " header__logo--open" : ""}
                        ${scrolled ? " header__logo--scrolled" : ""}`}
                    >
                        <h1 className='header__logo-line1'>Auberge <span>del</span></h1>
                        <h1 className='header__logo-line2'>Porvenir</h1>
                    </div>
                </NavLink>
                <nav className='header__nav'>
                    <NavLink className={'header__nav-link'} to={'/'}>{t("nav.home")}</NavLink>
                    <NavLink className={'header__nav-link'} to={'/rooms'}>{t("nav.rooms")}</NavLink>
                    <NavLink className={'header__nav-link'} to={'/about'}>{t("nav.about")}</NavLink>
                    <NavLink className={'header__nav-link'} to={'/reservation'}>{t("nav.reservation")}</NavLink>
                    <NavLink className={'header__nav-link'} to={'/localisation'}>{t("nav.localisation")}</NavLink>
                    <NavLink className={'header__nav-link header__nav-link--contact'} to={'/contact'}>{t("nav.contact")}</NavLink>
                    <select
                        className='header__select'
                        onChange={(e) => setLanguage(e.target.value)}
                        value={i18n.language}
                    >
                        {languages.map((lang, index) => (
                        <option
                            key={lang.value + index}
                            className='header__select-option'
                            value={lang.value}
                        >
                            {lang.flag}
                        </option>
                        ))}
                    </select>
                </nav>
                <button className={`header__button${menuIsOpen? " header__button--open" : ""}`} onClick={() => setMenuIsOpen(prev => !prev)}>
                    {menuIsOpen ? 
                        <i className="fa-solid fa-x"></i>
                        :
                        <i className="fa-solid fa-bars"></i>
                    }
                </button>
            </header>
            <div className={`mobile-menu${menuIsOpen ? ' mobile-menu--open' : ""}`}>
                <nav className={`mobile-menu__nav`}>
                    <NavLink onClick={(closeMenu)} className={'mobile-menu__nav-link'} to={'/'}>{t("nav.home")}</NavLink>
                    <NavLink onClick={(closeMenu)} className={'mobile-menu__nav-link'} to={'/rooms'}>{t("nav.rooms")}</NavLink>
                    <NavLink onClick={(closeMenu)} className={'mobile-menu__nav-link'} to={'/about'}>{t("nav.about")}</NavLink>
                    <NavLink onClick={(closeMenu)} className={'mobile-menu__nav-link'} to={'/reservation'}>{t("nav.reservation")}</NavLink>
                    <NavLink onClick={(closeMenu)} className={'mobile-menu__nav-link'} to={'/localisation'}>{t("nav.localisation")}</NavLink>
                    <NavLink onClick={(closeMenu)} className={'mobile-menu__nav-link'} to={'/contact'}>{t("nav.contact")}</NavLink>
                    <select className='mobile-menu__select' name="" id="" onChange={(e) => setLanguage(e.target.value)}>
                        {languages.map((lang, index) => (
                            <option key={lang.value + index} className='header__select-option' value={lang.value}>{lang.flag}</option>
                        ))}
                    </select>
                </nav>
                <div className='mobile-menu__social'>
                    <a target='_blank' className='mobile-menu__social-link' href="https://www.whatsapp.com/">
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                    <a target='_blank' className='mobile-menu__social-link' href="https://www.facebook.com/">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a target='_blank' className='mobile-menu__social-link' href="https://www.instagram.com/">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a target='_blank' className='mobile-menu__social-link' href="https://www.booking.com/">
                        <i className="fa-brands fa-blogger"></i>
                    </a>
                </div>
            </div>
        </>
    )
}