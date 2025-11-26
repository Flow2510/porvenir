import { useTranslation } from "react-i18next";
import Banner from "../assets/components/banner/banner";

export default function Contact() {
    const { t } = useTranslation('contact');
    
    return(
        <>
            <Banner
                source='/src/assets/images/jardin4.avif'
                alt="patio de l'auberge del Porvenir"
                title={t('title')}
            />
        </>
    )
}