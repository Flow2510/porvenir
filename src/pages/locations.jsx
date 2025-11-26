import { useTranslation } from "react-i18next"
import Banner from "../assets/components/banner/banner";
import LocationsIntro from "../assets/components/locationintro/locationsintro";
import Location from "../assets/components/location/location";
import Cta from "../assets/components/cta/cta";

export default function Locations() {
    const { t } = useTranslation('locations');
    const { t: tCta } = useTranslation('cta');

    const imagesChambre = [
        {
            name : "chambre",
            source : "/src/assets/images/chambre.avif",
            alt : "chambre"
        },
        {
            name : "chambre",
            source : "/src/assets/images/dortoir.avif",
            alt : "chambre"
        },
        {
            name : "chambre",
            source : "/src/assets/images/dortoir2.jpeg",
            alt : "chambre"
        }
    ]

    const imagesDortoir = [
        {
            name : "dortoir",
            source : "/src/assets/images/dortoir.avif",
            alt : "dortoir"
        },
        {
            name : "dortoir",
            source : "/src/assets/images/dortoir2.jpeg",
            alt : "dortoir"
        }
    ]

    return(
        <>
            <Banner
                source='/src/assets/images/patio.avif'
                alt="patio de l'auberge del Porvenir"
                title={t('pageTitle')}
            />
            <LocationsIntro 
                title={t('title')}
                text={t('textIntro')}
            />
            <Location 
                title={t('titleLocation')}
                source='/src/assets/images/chambre.avif'
                alt="alt"
                textLocation={t('textLocation')}
                imagesList={imagesChambre}
                link1={'/reservation'}
                linkText1={t('linkText1')}
                link2={'contact'}
                linkText2={t('linkText2')}
            />
            <Cta 
                title={tCta('title')}
                text={tCta('text')}
                linkUrl1={tCta('linkUrl1')}
                linkUrl2={tCta('linkUrl2')}
                linkText1={tCta('linkText1')}
                linkText2={tCta('linkText2')}
            />
            <Location 
                title={t('titleLocation2')}
                source='/src/assets/images/dortoir2.jpeg'
                alt="alt"
                textLocation={t('textLocation2')}
                imagesList={imagesDortoir}
                link1={'/reservation'}
                linkText1={t('linkText1')}
                link2={'contact'}
                linkText2={t('linkText2')}
            />
        </>
    )
}