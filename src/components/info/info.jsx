import Stat from '../stat/stat';
import './info.scss';

export default function Info({ infos }){
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