import './stat.scss';

export default function Stat({number, subtitle}){
    return(
        <article className='stat'>
            <span className='stat__number'>{number}</span>
            <p className='stat__subtitle'>{subtitle}</p>
        </article>
    )
}