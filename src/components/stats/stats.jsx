import './stats.scss';
import Stat from '../stat/stat';

export default function Stats({ stats }) {

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