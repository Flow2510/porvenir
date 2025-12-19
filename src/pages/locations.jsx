import { useTranslation } from "react-i18next"
import Banner from "../assets/components/banner/banner";
import LocationsIntro from "../assets/components/locationintro/locationsintro";
import Location from "../assets/components/location/location";
import Cta from "../assets/components/cta/cta";

export default function Locations() {
    const { t } = useTranslation('locations');

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
                source='/src/assets/images/jardin3.png'
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
                title={t('title2')}
                text={t('text2')}
                linkUrl1={t('linkUrl3')}
                linkUrl2={t('linkUrl4')}
                linkText1={t('linkText3')}
                linkText2={t('linkText4')}
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