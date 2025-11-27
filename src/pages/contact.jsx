import { useTranslation } from "react-i18next";
import Banner from "../assets/components/banner/banner";
import LocationsIntro from "../assets/components/locationintro/locationsintro";
import Form from "../assets/components/form/form";

export default function Contact() {
    const { t } = useTranslation('contact');
    
    return(
        <>
            <Banner
                source='/src/assets/images/jardin4.avif'
                alt="patio de l'auberge del Porvenir"
                title={t('pageTitle')}
            />
            <LocationsIntro 
                title={t('title')}
                text={t('textIntro')}
            />
            <Form />
        </>
    )
}