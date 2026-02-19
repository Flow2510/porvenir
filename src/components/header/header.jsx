import { useState, useEffect } from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'

export default function Header({ setLanguage }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const languages = [
        {
            value: "FR",
            flag: "🇫🇷"
        },
        {
            value: "ES",
            flag: "🇪🇸"
        },
        {
            value: "FR",
            flag: "🇬🇧"
        }
    ]

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
                <h1 className={`header__logo${menuIsOpen? ' header__logo--open' : ''}`}>Logo</h1>
                <nav className='header__nav'>
                    <NavLink className={'header__nav-link'} to={'/'}>Home</NavLink>
                    <NavLink className={'header__nav-link'} to={'/rooms'}>Rooms</NavLink>
                    <NavLink className={'header__nav-link'} to={'/about'}>About</NavLink>
                    <NavLink className={'header__nav-link'} to={'/reservation'}>Reservation</NavLink>
                    <NavLink className={'header__nav-link'} to={'/localisation'}>Localisation</NavLink>
                    <NavLink className={'header__nav-link header__nav-link--contact'} to={'/contact'}>Contact</NavLink>
                    <select className='header__select' name="" id="" onChange={(e) => setLanguage(e.target.value)}>
                        {languages.map((lang, index) => (
                            <option key={lang.value + index} className='header__select-option' value={lang.value}>{lang.flag}</option>
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
                    <NavLink className={'mobile-menu__nav-link'} to={'/'}>Home</NavLink>
                    <NavLink className={'mobile-menu__nav-link'} to={'/rooms'}>Rooms</NavLink>
                    <NavLink className={'mobile-menu__nav-link'} to={'/about'}>About</NavLink>
                    <NavLink className={'mobile-menu__nav-link'} to={'/reservation'}>Reservation</NavLink>
                    <NavLink className={'mobile-menu__nav-link'} to={'/localisation'}>Localisation</NavLink>
                    <NavLink className={'mobile-menu__nav-link'} to={'/contact'}>Contact</NavLink>
                    <select className='mobile-menu__select' name="" id="" onChange={(e) => setLanguage(e.target.value)}>
                        {languages.map((lang, index) => (
                            <option key={lang.value + index} className='header__select-option' value={lang.value}>{lang.flag}</option>
                        ))}
                    </select>
                </nav>
            </div>
        </>
    )
}