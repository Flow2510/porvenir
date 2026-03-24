
import Brand from '../components/brand/brand';
import Cta from '../components/cta/cta';
import FixedHero from "../components/fixedhero/fixedhero";
import GridSection from '../components/gridsection/gridsection';

import image from '../assets/images/escalier-jungle.jpg'
import videoBackground from '../assets/video/jungle-beach.mp4'

import santaMarta from '../assets/images/santamarta.jpg'
import minca from '../assets/images/minca.jpg'
import beach from '../assets/images/plage.jpg'
import magdalena from '../assets/images/fleuve.jpg'
import { useTranslation } from 'react-i18next';

export default function About(){
    const { t } = useTranslation("about")

    const data = [
        {
            image: santaMarta,
            title: t("grid.0.title"),
            subtitle: t("grid.0.subtitle"),
            text: t("grid.0.text")
        },
        {
            image: minca,
            title: t("grid.1.title"),
            subtitle: t("grid.1.subtitle"),
            text: t("grid.1.text")
        },
        {
            image: beach,
            title: t("grid.2.title"),
            subtitle: t("grid.2.subtitle"),
            text: t("grid.2.text")
        },
        {
            image: magdalena,
            title: t("grid.3.title"),
            subtitle: t("grid.3.subtitle"),
            text: t("grid.3.text")
        },
    ]

    return(
        <main>
            <FixedHero 
                image={image}
                title={t("hero.title")}
                text={t("hero.text")}
            />
            <GridSection 
                data={data}
                santaMarta={santaMarta}
                minca={minca}
                magdalena={magdalena}
                beach={beach}

            />
            <Brand 
                videoBackground={videoBackground}
            />
            <Cta
                title={t("cta.title")}
                text={t("cta.text")}
                link={t("cta.button")}
                to={""}
            />
        </main>
    )
}