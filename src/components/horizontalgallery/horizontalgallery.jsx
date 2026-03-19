import { useMediaQuery } from '../../hooks/useMediaQuery';

import './horizontalgallery.scss';

import patio from "../../assets/images/patio.jpg"
import bain from "../../assets/images/salle-bain.jpg"
import salon from "../../assets/images/salle-manger.jpg"
import volet from "../../assets/images/chambre-volet.jpg"
import dortoir from "../../assets/images/chambre2.jpg"
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function HorizontalGallery() {
    const isMobile = useMediaQuery("(max-width: 1200px)")
    const [width, setWidth] = useState(0)
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
        }
    ]
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    })
    const ref = useRef(null)

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
        const entry = entries[0]
        setWidth(entry.contentRect.width)
        })

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    const GAP = 40
    const distance = ( width ) * (images.length - 1);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${distance}px`])

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
                <div className='horizontal-gallery__large-scroll' ref={scrollRef}>
                    <div className='horizontal-gallery__large-sticky'>
                        <motion.div 
                            className="horizontal-gallery__large-gallery"
                            style={{ x }}
                        >
                            {images.map((image, index) => (
                                <article className="horizontal-gallery__large-article" key={index + image.alt} ref={ref}>
                                    <img className="horizontal-gallery__large-image" src={image.image} alt={image.alt} />
                                    <div className="horizontal-gallery__large-overlay"></div>
                                    <div className='horizontal-gallery__large-content'>
                                        <h2 className='horizontal-gallery__large-title'>{image.title}</h2>
                                        <p className='horizontal-gallery__large-text'>{image.text}</p>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    </div>
                </div>
            }
        </section>
    );
}