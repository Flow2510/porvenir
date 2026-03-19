import { motion, useScroll, useTransform } from 'motion/react';
import './fixedhero.scss';

export default function FixedHero({ video, image, subtitle, title, text }){
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 700], [0, -400]);


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
                />
            }
            <div className='fixed-hero__overlay'></div>
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