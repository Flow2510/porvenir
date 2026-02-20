import { NavLink } from 'react-router-dom'
import './hero.scss'

export default function Hero() {
    return(
        <section className='hero'>
            <img className='hero__background' src="/src/assets/images/cabane-crepuscule.jpg" alt="" />
            <div className='hero__content'>
                <h1 className="hero__content-title"><span>Auberge del</span><span>Porvenir</span></h1>
                <NavLink className="hero__content-link">Reservation</NavLink>
            </div>
        </section>
    )
}