import { useTranslation } from "react-i18next";
import Banner from "../assets/components/banner/banner";
import LocationsIntro from "../assets/components/locationintro/locationsintro";
import Booking from "../assets/components/booking/booking";

export default function Reservation() {
    const { t } = useTranslation('reservation');
    
    return(
        <>
            <Banner
                source='/src/assets/images/patio2.jpg'
                alt="patio de l'auberge del Porvenir"
                title={t('pageTitle')}
            />
            <LocationsIntro 
                title={t('title')}
                text={t('textIntro')}
            />
            <Booking 
                title={t('titleBook')}
                href1={t('href1')}
                href2={t('href2')}
                linkText1={t('linkText1')}
                linkText2={t('linkText2')}
            />
        </>
    )
}