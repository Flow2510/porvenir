import './slider.scss';
import { useState } from 'react';

export default function Slider({images}) {
    const [sliderIndex, setSliderIndex] = useState(0);
    const totalSlides = images.length;
    const [showImage, setShowImage] = useState(false);

    const handleClickNext = () => {
        setSliderIndex((prev) =>
            prev === totalSlides - 1 ? 0 : prev + 1
        );
    };

    const handleClickBack = () => {
        setSliderIndex((prev) =>
        prev === 0 ? totalSlides - 1 : prev - 1
        );
    };

    return(
        <section className='slider'>
            <button className='slider__button' onClick={() => setShowImage(prev => !prev)}>
                <img className='slider__button-image' src={images[sliderIndex].source} alt={images[sliderIndex].alt} />
            </button>
            {showImage &&
                <button onClick={() => setShowImage(prev => !prev)} className='slider__modal'>
                    <img className='slider__modal-image' src={images[sliderIndex].source} alt="" />
                </button>
            }
            <div className='slider__arrows'>
                <button className='slider__arrows-arrow' onClick={handleClickBack}><i className="fa-solid fa-chevron-left"></i></button>
                <button className='slider__arrows-arrow' onClick={handleClickNext}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className='slider__dots'>
                {images.map((i, index) => (
                    <button className={`slider__dots-dot${index === sliderIndex? " slider__dots-dot--active" : ""}`} key={i.source + index} onClick={() => setSliderIndex(index)}></button>
                ))}
            </div>
        </section>
    )
}