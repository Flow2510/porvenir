import './stats.scss';
import Stat from '../stat/stat';

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
        number: 3,
        subtitle: "Langues parlées",
        animation: false
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
        <section 
            className='stats'
        >
            <div className='stats__wrapper'>
                {stats.map((stat, index) => (
                <Stat
                    key={stat.subtitle + index}
                    subtitle={stat.subtitle}
                    unity={stat.unity}
                    number={stat.number}
                    animation={stat.animation}
                />
            ))}
            </div>
        </section>
    )
}