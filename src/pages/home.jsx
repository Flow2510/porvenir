import { useTranslation } from "react-i18next";
import Cta from "../assets/components/cta/cta";
import Hero from "../assets/components/hero/hero";
import Intro from "../assets/components/intro/intro";
import Region from "../assets/components/region/region";

export default function Home() {
    const { t } = useTranslation('cta')
    return(
        <>
            <Hero />
            <Intro />
            <Cta 
                title={t('title')}
                text={t('text')}
                linkUrl1={t('linkUrl1')}
                linkUrl2={t('linkUrl2')}
                linkText1={t('linkText1')}
                linkText2={t('linkText2')}
            />
            <Region />
        </>
    )
}