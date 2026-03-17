import { motion } from 'motion/react';
import './stat.scss';
import CountUp from 'react-countup';

export default function Stat({ number, subtitle, unity, animation }){

    return(
        <motion.article 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className='stat'
        >
            <p className='stat__number'>
                {animation? 
                    <CountUp 
                        end={number} 
                        duration={3}
                    />
                    :
                    <span>{number}</span>
                }
                <span className='stat__number-unity'>{unity}</span>
            </p>
            <p className='stat__subtitle'>{subtitle}</p>
        </motion.article>
    )
}