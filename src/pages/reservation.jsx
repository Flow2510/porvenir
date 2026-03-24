import heroBackground from "../assets/images/chambre-volet.jpg"
import GridSection from "../components/gridsection/gridsection";
import HalfHero from "../components/halfhero/halfhero";
import Brand from "../components/brand/brand";

import chambre from '../assets/images/chambre.jpg'
import chambre2 from '../assets/images/chambre2.jpg'

import videoBackground from '../assets/video/interieur.mp4'
import { useTranslation } from "react-i18next";

export default function Reservation(){
    const { t } = useTranslation("reservation")

    const data = [
        {
            image: chambre2,
            title: t("grid.0.title") ,
            subtitle: "",
            text: t("grid.0.text"),
            link: "https://www.booking.com/",
            textLink: t("grid.0.textLink")
        },
        {
            image: chambre,
            title: t("grid.1.title") ,
            subtitle: "",
            text: t("grid.1.text"),
            link: "https://www.airbnb.fr/",
            textLink: t("grid.1.textLink")
        }
    ]

    return(
        <main>
            <HalfHero
                image={heroBackground}
                title={t('hero.title')}
                text={t('hero.text')}
            />
            <GridSection 
                data={data}
            />
            <Brand 
                videoBackground={videoBackground}
            />
        </main>
    )
}