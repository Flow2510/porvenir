import './stats.scss';
import Stat from '../stat/stat';

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
        <section className='stats'>
            {stats.map((stat, index) => (
                <Stat
                    key={stat.subtitle + index}
                    subtitle={stat.subtitle}
                    number={stat.number}
                />
            ))}
        </section>
    )
}