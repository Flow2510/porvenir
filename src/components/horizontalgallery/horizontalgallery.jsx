import { useMediaQuery } from '../../hooks/useMediaQuery';

import './horizontalgallery.scss';

import patio from "../../assets/images/patio.jpg"
import bain from "../../assets/images/salle-bain.jpg"
import salon from "../../assets/images/salle-manger.jpg"
import volet from "../../assets/images/chambre-volet.jpg"
import dortoir from "../../assets/images/chambre2.jpg"

export default function HorizontalGallery() {
    const isMobile = useMediaQuery("(max-width: 768px)")

    const images = [
        {
            image: patio,
            alt: ``,
            title: "Terrasse",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            image: bain,
            alt: ``,
            title: "Bain",
            text: "Sapiente in commodi cumque dolorem tempore expedita quae nemo quidem, aliquid dolores laboriosam."
        },
        {
            image: salon,
            alt: ``,
            title: "Salon",
            text: "Quas distinctio explicabo dignissimos autem odio voluptate hic illo?"
        },
        {
            image: volet,
            alt: ``,
            title: "Chambre",
            text: "Quas distinctio explicabo dignissimos autem odio voluptate hic illo?"
        },
        {
            image: dortoir,
            alt: ``,
            title: "Dortoir",
            text: "Sapiente in commodi cumque dolorem tempore expedita quae nemo quidem, aliquid dolores laboriosam."
        },
    ]

    return (
        <section className='horizontal-gallery'>
            {isMobile ? 
                <div className="horizontal-gallery__mobile-gallery">
                    {images.map((image, index) => (
                        <article key={index + image.alt} className="horizontal-gallery__mobile-article">
                            <img className="horizontal-gallery__mobile-image" src={image.image} alt={image.alt} />
                            <div className="horizontal-gallery__mobile-overlay"></div>
                            <div className='horizontal-gallery__mobile-content'>
                                <h2 className='horizontal-gallery__mobile-title'>{image.title}</h2>
                                <p className='horizontal-gallery__mobile-text'>{image.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
                :
                <div className='horizontal-gallery__large-scroll'>
                    <div className='horizontal-gallery__large-sticky'>
                        <div className="horizontal-gallery__large-gallery">
                            {images.map((image, index) => (
                                <article className="horizontal-gallery__large-article" key={index + image.alt} >
                                    <img className="horizontal-gallery__large-image" src={image.image} alt={image.alt} />
                                    <div className="horizontal-gallery__large-overlay"></div>
                                    <div className='horizontal-gallery__large-content'>
                                        <h2 className='horizontal-gallery__large-title'>{image.title}</h2>
                                        <p className='horizontal-gallery__large-text'>{image.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}