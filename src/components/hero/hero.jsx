import { NavLink } from 'react-router-dom'
import './hero.scss'

export default function Hero() {
    return(
        <section className='hero'>
            <video className='hero__background' src="/src/assets/video/porvenir.mp4" loop autoPlay muted></video>
            <div className='hero__content'>
                <h1 className="hero__content-title"><span>Auberge del</span><span>Porvenir</span></h1>
                <NavLink className="hero__content-link">Reservation</NavLink>
            </div>
        </section>
    )
}