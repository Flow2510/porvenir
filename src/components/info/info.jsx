import Stat from '../stat/stat';
import './info.scss';

const infos = [
    {
        number: 10,
        subtitle: "5-stars reviews",
        unity: "+",
        animation: true
    },
    {
        number: 3,
        subtitle: "Langues parlées",
        animation: false
    },
    {
        number: 100,
        unity: "%",
        subtitle: "test",
        animation: true
    }
]

export default function Info(){
    return(
        <section className='info'>
            <div className='info__content'>
                {infos.map((info, index) => (
                    <Stat 
                        key={info.subtitle + index}
                        subtitle={info.subtitle}
                        number={info.number}
                        animation={info.animation}
                        unity={info.unity}
                    />
                ))}
            </div>
        </section>
    )
}