import { useTranslation } from "react-i18next";
import Banner from "../assets/components/banner/banner";

export default function Reservation() {
    const { t } = useTranslation('reservation');
    
    return(
        <>
            <Banner
                source='/src/assets/images/patio2.jpg'
                alt="patio de l'auberge del Porvenir"
                title={t('title')}
            />
        </>
    )
}