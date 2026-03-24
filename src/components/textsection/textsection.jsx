import { motion } from 'motion/react'
import './textsection.scss'

export default function TextSection({ title, text, color, backgroundColor }) {
    return(
        <section className='content-section' style={{ backgroundColor: `${backgroundColor}`, color: `${color}`}}>
            <div className='content-section__content'>
                <h2 className='content-section__content-title'>{title}</h2>
                <p className='content-section__content-text'>{text}</p>
            </div>
        </section>
    )
}