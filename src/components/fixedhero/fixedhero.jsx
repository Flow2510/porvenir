import { motion, useScroll, useTransform } from 'motion/react';
import './fixedhero.scss';
import { useRef } from 'react';

export default function FixedHero({ video, image, subtitle, title, text }){
    const scrollRef = useRef(null)
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 500], [0, -250]);

    return(
        <motion.section className='fixed-hero' style={{ y }}>
            {video &&
                <video 
                    className='fixed-hero__background' 
                    autoPlay loop muted src={video}
                    
                >

                </video>
            }
            {image &&
                <img 
                    className='fixed-hero__background' 
                    src={image} 
                    alt="" 
                    style={{ y }}
                />
            }
            <div className='fixed-hero__content'>
                {subtitle &&
                    <p className='fixed-hero__content-subtitle'>{subtitle}</p>                    
                }
                <h1 className='fixed-hero__content-title'>{title}</h1>
                {text &&
                    <p className='fixed-hero__content-text'>{text}</p>
                }
            </div>
        </motion.section>
    )
}