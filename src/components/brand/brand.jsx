import { motion, useScroll, useTransform } from 'motion/react';
import './brand.scss';
import { useRef } from 'react';

export default function Brand({ videoBackground }) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
    )

    return(
        <section className='brand'>
            <div className='brand__content'>
                <motion.div 
                    className={`brand__logo`}
                    initial={{ opacity: 0, scale:0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <h1 className='brand__logo-line1'>Auberge <span>del</span></h1>
                    <h1 className='brand__logo-line2'>Porvenir</h1>
                </motion.div>
            </div>
            <motion.div 
                className='brand__background-wrapper'
                ref={ref}
                style={{ clipPath }}
            >
                <video 
                    className='brand__background' 
                    src={videoBackground}
                    alt="" 
                    autoPlay
                    muted
                    loop
                />
            </motion.div>
        </section>
    )
}