import './stats.scss';
import Stat from '../stat/stat';
import { motion } from 'motion/react';

const stats = [
    {
        number: 2,
        subtitle: "Chambres"
    },
    {
        number: 5 + " KM",
        subtitle: "de Santa Marta"
    },
    {
        number: 1,
        subtitle: "Piscine"
    },
    {
        number: 10 + " KM",
        subtitle: "Plage"
    }
]

export default function Stats() {
    return(
        <motion.section 
            className='stats'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 1 }}    
        >
            {stats.map((stat, index) => (
                <Stat
                    key={stat.subtitle + index}
                    subtitle={stat.subtitle}
                    number={stat.number}
                />
            ))}
        </motion.section>
    )
}