import './stats.scss';
import Stat from '../stat/stat';
import { motion } from 'motion/react';

const stats = [
    {
        number: 2,
        subtitle: "Chambres Doubles",
        animation: true
    },
    {
        number: 1,
        subtitle: "Dortoir",
        animation: false
    },
    {
        number: 8,
        subtitle: "Lits",
        animation: true
    },
    {
        number: 12,
        unity: " KM",
        subtitle: "Santa Marta centre",
        animation: true
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
                    unity={stat.unity}
                    number={stat.number}
                    animation={stat.animation}
                />
            ))}
        </motion.section>
    )
}