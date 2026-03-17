import { useTranslation } from 'react-i18next';
import Stat from '../stat/stat';
import './info.scss';

export default function Info(){
    const { t } = useTranslation("info");

    const infos = [
        {
            number: 5,
            subtitle: `${t("subtitle_1")}`,
            unity: "+",
            animation: true
        },
        {
            number: 3,
            subtitle: `${t("subtitle_2")}`,
            animation: true
        },
        {
            number: 100,
            unity: "%",
            subtitle: `${t("subtitle_3")}`,
            animation: true
        }
    ]

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