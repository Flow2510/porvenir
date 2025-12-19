import './trad.scss';

export default function Trad({handleSelectLanguage}){
    const lang = [
        {
            "language" : "fr",
        },
        {
            "language" : "es",
        }
    ]

    return(
        <select className='select' name="" id="" onChange={handleSelectLanguage}>
            {lang.map((l, index) => (
                <option className='select__option' value={l.language} key={l.language + index}>{l.language}</option>
            ))}
        </select>
    )
}