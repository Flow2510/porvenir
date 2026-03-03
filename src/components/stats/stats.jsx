import './stats.scss';
import Stat from '../stat/stat';
import { useTranslation } from 'react-i18next';

export default function Stats() {
    const { t } = useTranslation("stats")
    const stats = [
        {
            number: 2,
            subtitle: `${t("subtitle_1")}`,
            animation: true
        },
        {
            number: 1,
            subtitle: `${t("subtitle_2")}`,
            animation: false
        },
        {
            number: 3,
            subtitle: `${t("subtitle_3")}`,
            animation: false
        },
        {
            number: 12,
            unity: " KM",
            subtitle: `${t("subtitle_4")}`,
            animation: true
        }
    ]
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