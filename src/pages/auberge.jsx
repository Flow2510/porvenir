import { useTranslation } from "react-i18next";
import Banner from "../assets/components/banner/banner";
import Presentation from "../assets/components/presentation/presentation";

export default function Auberge() {
    const [ t ] = useTranslation('auberge');
    const imagesAuberge = [
        {
            source: "/src/assets/images/auberge3.jpeg",
            alt: "alt",
            name: "auberge"
        },
        {
            source: "/src/assets/images/terrasse3.jpeg",
            alt: "alt",
            name: "terrasse"
        },
        {
            source: "/src/assets/images/cuisine.avif",
            alt: "alt",
            name: "cuisine"
        },
        {
            source: "/src/assets/images/jardin3.png",
            alt: "alt",
            name: "jardin"
        },
        {
            source: "/src/assets/images/patio.avif",
            alt: "alt",
            name: "patio"
        },
        {
            source: "/src/assets/images/terrasse.avif",
            alt: "alt",
            name: "jardin"
        }
    ]

    return(
        <>
            <Banner 
                source='/src/assets/images/auberge.avif'
                alt="patio de l'auberge del Porvenir"
                title={t('pageTitle')}
            />
            <Presentation 
                title={t('title')}
                text1={t('text1')}
                text2={t('text2')}
                link1={'/locations'}
                linkText1={t('linkText1')}
                link2={'/contact'}
                linkText2={t('linkText2')}
                images={imagesAuberge}
            />
        </>
    )
}