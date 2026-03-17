import Stat from '../stat/stat';
import './videohero.scss';

export default function VideoHero() {
    return(
        <section className='video-hero'>
            <video autoPlay muted loop src="/src/assets/video/terasse.mp4" className='video-hero__background'></video>
            <div className='video-hero__overlay'></div>
            <div className='video-hero__content'>
                <p className='video-hero__content-subtitle'>Santa Marta, Colombie</p>
                <h1 className='video-hero__content-title'>L'Auberge</h1>
            </div>
        </section>
    )
}