import { motion, useScroll, useTransform } from 'motion/react';
import './halfhero.scss'

export default function HalfHero({ title, text, image }) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -100]);

    return(
        <section className='half-hero'>
            <img src={image} alt="" className='half-hero__background'/>
            <div className='half-hero__overlay'></div>
            <motion.div className='half-hero__content' style={{ y }}>
                <h1 className='half-hero__content-title'>{title}</h1>
                <p className='half-hero__content-text'>{text}</p>
            </motion.div>
        </section>
    )
}