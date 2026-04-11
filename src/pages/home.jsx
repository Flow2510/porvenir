import Hero from "../components/hero/hero";
import Info from "../components/info/info";
import Intro from "../components/intro/intro";
import Presentation from "../components/presentation/presentation";
import Reviews from "../components/reviews/reviews";
import Stats from "../components/stats/stats";
import Banner from "../components/banner/banner"
import Features from "../components/features/features";
import Brand from "../components/brand/brand";
import Location from "../components/location/location";
import Cta from "../components/cta/cta";

import videoBackground from '../assets/video/jungle-beach.mp4'

import patio from "../assets/images/patio.jpg"
import habitation from "../assets/images/habitation.jpg"
import cabane from "../assets/images/cabane-crepuscule.jpg"
import terasse from "../assets/images/cabane.jpg"

import minca from '../assets/images/minca.jpg'
import santaMarta3 from '../assets/images/santamarta3.jpg'
import river from '../assets/images/fleuve.jpg'
import beach from '../assets/images/plage.jpg'

import { useTranslation } from "react-i18next";

export default function Home(){
    const { t } = useTranslation("home")

    const stats = [
        {
            number: 2,
            subtitle: `${t("stats.subtitle_1")}`,
            animation: true
        },
        {
            number: 3,
            subtitle: `${t("stats.subtitle_2")}`,
            animation: false
        },
        {
            number: 10,
            unity: " KM",
            subtitle: `${t("stats.subtitle_3")}`,
            animation: false
        },
        {
            number: 12,
            unity: " KM",
            subtitle: `${t("stats.subtitle_4")}`,
            animation: true
        }
    ]

    const imagesPresentation = [
        {
            image: patio,
            alt: `${t("presentation.alt_1")}`
        },
        {
            image: habitation,
            alt: `${t("presentation.alt_2")}`
        },
        {
            image: cabane,
            alt: `${t("presentation.alt_3")}`
        },
        {
            image: terasse,
            alt: `${t("presentation.alt_4")}`
        }
    ]

    const infos = [
        {
            number: 5,
            subtitle: `${t("info.subtitle_1")}`,
            unity: "+",
            animation: true
        },
        {
            number: 3,
            subtitle: `${t("info.subtitle_2")}`,
            animation: true
        },
        {
            number: 100,
            unity: "%",
            subtitle: `${t("info.subtitle_3")}`,
            animation: true
        }
    ]

    const reviews = [
        {
            logo: "",
            name: "Diana Peña",
            info: "Avis Google",
            text: `"L'auberge est un excellent choix pour se ressourcer au cœur de la nature dans la Sierra Nevada de Santa Marta. Ses espaces verts abritent une faune riche et variée : oiseaux chanteurs, araignées, iguanes, etc. Un sentier de randonnée permet d'admirer Santa Marta depuis son sommet. Un service de transport est également disponible (avec supplément). Enfin, une machine à café est à votre disposition pour préparer un délicieux café."`,
            stars: 5,
            link: "https://maps.app.goo.gl/emXbXwFfHMM6Qssx6"
        },
        {
            logo: "",
            name: "Yeison Pinzón",
            info: "Avis Google",
            text: `"L'hébergement est très agréable. Ils proposent des jeux de société très divertissants. Les guides étaient également très sympathiques et l'endroit est très confortable. J'y retournerai."`,
            stars: 5,
            link: "https://maps.app.goo.gl/iMh3bQ6NG8bU4pb88"
        },
        {
            logo: "",
            name: "Lorena Sánchez",
            info: "Avis Google",
            text: `"Un endroit exceptionnel pour passer du temps en famille, en couple ou entre amis. Si vous recherchez un lieu paisible en pleine nature, c'est l'endroit idéal."`,
            stars: 5,
            link: "https://maps.app.goo.gl/B4ynYmsc5kUToSHX8"
        }
    ]

    const itemsBanner = [
        `${t("itemsBanner.item_1")}`,
        `${t("itemsBanner.item_2")}`,
        `${t("itemsBanner.item_3")}`,
        `${t("itemsBanner.item_4")}`,
        `${t("itemsBanner.item_5")}`
    ]

    const features = [
        `${t("features.feature_1")}`,
        `${t("features.feature_2")}`,
        `${t("features.feature_3")}`,
        `${t("features.feature_4")}`,
        `${t("features.feature_5")}`,
        `${t("features.feature_6")}`
    ]

    const imagesLocation = [
        {
            image: santaMarta3,
            alt: `${t("location.alt_1")}`
        },
        {
            image: beach,
            alt: `${t("location.alt_2")}`
        },
        {
            image: river,
            alt:`${t("location.alt_3")}`
        },
        {
            image: minca,
            alt:`${t("location.alt_4")}`
        }
    ]

    return(
        <main>
            <Hero 
                link={t("hero.link")}
                />
            <Stats 
                stats={stats}
            />
            <Intro 
                title={t("intro.title")}
                text1={t("intro.text_1")}
                text2={t("intro.text_2")}
                text3={t("intro.text_3")}
            />
            <Presentation 
                images={imagesPresentation}
                title={t("presentation.title")}
                subtitle={t("presentation.subtitle")}
            />
            <Info 
                infos={infos}
            />
            <Reviews 
                reviews={reviews}
                title={t("reviews.title")}
                subtitle={t("reviews.subtitle")}
            />
            <Banner 
                itemsBanner={itemsBanner}
            />
            <Features 
                features={features}
                title={t("features.title")}
                subtitle={t("features.subtitle")}
            />
            <Brand 
                videoBackground={videoBackground}
            />
            <Location 
                images={imagesLocation}
                title={t("location.title")}
                text1={t("location.text_1")}
                text2={t("location.text_2")}
            />
            <Cta 
                title={t("cta.title")}
                text={t("cta.text")}
                link={t("cta.link")}
                to={"/reservation"}
            />
        </main>
    )
}