import Stat from '../stat/stat';
import './info.scss';

const infos = [
    {
        number: 10 + "+",
        subtitle: "5-stars reviews"
    },
    {
        number: 3,
        subtitle: "Langues parlées"
    },
    {
        number: 100 + "%",
        subtitle: "test"
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
                    />
                ))}
            </div>
        </section>
    )
}