import './review.scss';

export default function Review({ text, logo, name, info, stars }) {
    return(
        <article className='review'>
            <p className='review__text'>{text}</p>
            <div className='review__line'></div>
            <div className='review__profile'>
                <img src={logo} alt={`logo of ${name}`} />
                <div className='review__profile-wrapper'>
                    <p className='review__profile-name'>{name}</p>
                    <p className='review__profile-info'>{info}</p>
                </div>
                <div className='review__rating'>
                    {[...Array(stars)].map((_, index) => (
                        <i key={index} className="fa-solid fa-star"></i>
                    ))}
                </div>
            </div>
        </article>
    )
}