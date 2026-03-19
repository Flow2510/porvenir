import './gridsection.scss';

export default function GridSection({ data }) {

    return(
        <section className='grid-section'>
            {data.map((d, index) => (
                <div key={d.title + d.text + index} className='grid-section__wrapper'>
                    <img src={d.image} alt="" className='grid-section__image'/>
                    <div className='grid-section__content'>
                        <h2 className='grid-section__content-title'>{d.title}</h2>
                        <p className='grid-section__content-text'>{d.text}</p>
                        {d.textLink && d.link &&
                            <a href={d.link} className='grid-section__content-link'>
                                {d.textLink}<span>→</span>
                            </a>
                        }
                    </div>
                </div>
            ))}
        </section>
    )
}