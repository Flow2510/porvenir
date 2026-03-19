import './videohero.scss';

export default function VideoHero({subtitle, text, title, videoBackground, color}) {
    return(
        <section className='video-hero'>
            <video autoPlay muted loop src={videoBackground} className='video-hero__background'></video>
            <div className='video-hero__overlay'></div>
            <div className='video-hero__content'>
                <div>
                    {subtitle && 
                        <p className='video-hero__content-subtitle'>{subtitle}</p>
                    }
                    <h1 className='video-hero__content-title'>{title}</h1>
                </div>
                {text &&
                    <p>{text}</p>
                }
            </div>
        </section>
    )
}