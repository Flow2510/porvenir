import { motion } from 'motion/react';
import './intro.scss';
import { useTranslation } from 'react-i18next';
import porvenirVideo from "../../assets/video/porvenir.mp4"


export default function Intro() {
    const { t } = useTranslation("intro")

    return(
        <section className='intro'>
            <div className='intro__content'>
                <motion.h2 
                    className='intro__content-title'
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {t("title")}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="intro__content-text"
                >
                    {t("text_1")}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="intro__content-text"
                >
                    {t("text_2")}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="intro__content-text"
                >
                    {t("text_3")}
                </motion.p>
            </div>
            <div className='intro__video-wrapper'>
                <motion.video 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0 }}
                    className='intro__video' autoPlay loop muted src={porvenirVideo}
                >

                </motion.video>
            </div>
        </section>
    )
}