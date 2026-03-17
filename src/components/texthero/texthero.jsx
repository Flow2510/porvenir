import './texthero.scss'

export default function TextHero({title, text}) {
    return(
        <section className='text-hero'>
            <div className='text-hero__content'>
                <h1 className='text-hero__content-title'>{title}</h1>
                <p className='text-hero__content-text'>{text}</p>
            </div>
        </section>
    )
}