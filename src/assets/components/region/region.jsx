import './region.scss';
import { useTranslation } from 'react-i18next';
import RegionCard from '../regioncard/regioncard';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function Region() {
    const { t: tRegion } = useTranslation('region');
    const { t: tCard } = useTranslation('regioncard');

    const regionCardKeys = [
        "santamarta",
        "plages",
        "jungle"
    ];

    return(
        <section className="region">
            <div className="region__content">
                <motion.h2
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='region__content-title'
                >
                    {tRegion('title')}
                </motion.h2>
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='region__content-text'
                >
                    {tRegion('text')}
                </motion.p>
            </div>
            {regionCardKeys.map((key) => (
                <RegionCard 
                    key={key}
                    title={tCard(`${key}.title`)}
                    text={tCard(`${key}.text`)}
                    source={`/src/assets/images/${key}.jpg`}
                    alt={tCard(`${key}.title`)}
                    linkText={tCard(`${key}.linkText`)}
                    linkUrl={tCard(`${key}.href`)}
                />
            ))}
        </section>
    )
}