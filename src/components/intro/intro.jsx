import { motion } from 'motion/react';
import './intro.scss';

export default function Intro() {
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
                    Title
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="intro__content-text"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ea et distinctio, porro blanditiis reiciendis repellat nam, numquam dolor sed laboriosam id corrupti quas maiores eaque in quisquam molestias similique.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="intro__content-text"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum perspiciatis neque ducimus rem vitae unde distinctio quas, placeat dolorem temporibus expedita facere optio error? Nihil maxime vero molestiae assumenda.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="intro__content-text"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe iure eius officiis non atque id, nostrum voluptates praesentium tenetur perferendis blanditiis amet excepturi earum porro architecto animi aliquam sunt.
                </motion.p>
            </div>
            <div className='intro__video-wrapper'>
                <motion.video 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0 }}
                    className='intro__video' autoPlay loop muted src="/src/assets/video/porvenir.mp4"
                >

                </motion.video>
            </div>
        </section>
    )
}