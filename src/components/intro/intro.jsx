import { motion } from 'motion/react';
import './intro.scss';
import porvenirVideo from "../../assets/video/porvenir.mp4"
import RevealWord from '../revealword/revealword';


export default function Intro({ title, text1, text2, text3 }) {

    return(
        <section className='intro'>
            <div className='intro__wrapper'>
                <div className='intro__content'>
                    <motion.h2 
                        className='intro__content-title'
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <RevealWord 
                            text={title}
                        />                        
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="intro__content-text"
                    >
                        {text1}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="intro__content-text"
                    >
                        {text2}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="intro__content-text"
                    >
                        {text3}
                    </motion.p>
                </div>
                <div className='intro__video-wrapper'>
                    <motion.video 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                        className='intro__video' 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        preload="metadata"
                    >
                        <source src={porvenirVideo} type="video/mp4" />
                    </motion.video>
                </div>
            </div>
        </section>
    )
}