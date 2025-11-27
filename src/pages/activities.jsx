import { useTranslation } from "react-i18next";
import Banner from "../assets/components/banner/banner";
import LocationsIntro from "../assets/components/locationintro/locationsintro";
import Activity from "../assets/components/activity/activity";
import Cta from "../assets/components/cta/cta";

export default function Activities() {
    const { t } = useTranslation('activities');
    const { t: tCta } = useTranslation('cta');

    const townActivities = [
        {
            title : "Visitez la ville de Santa Marta",
            text : "Santa Marta séduit par son ambiance décontractée : baladez-vous dans le centre historique, découvrez ses façades coloniales, ses cafés locaux, ses marchés d’artisans et sa promenade maritime. C’est l’endroit idéal pour ressentir l’énergie chaleureuse de la côte caraïbe.",
            source : '/src/assets/images/street2.jpg',
            alt : "Santa Marta street"
        },
        {
            title : "Son architecture",
            text : "Partez à la découverte de ses édifices coloniaux, de la cathédrale de Santa Marta, la plus ancienne du pays, et des nombreux bâtiments restaurés qui témoignent du passé de la ville. Chaque rue raconte une histoire, entre influences indigènes, africaines et espagnoles.",
            source : '/src/assets/images/street.jpg',
            alt : "Santa Marta street"
        },
        {
            title : "Ses marchés locaux",
            text : "Les marchés de Santa Marta sont de véritables trésors de couleurs et de saveurs. On y trouve des fruits tropicaux fraîchement cueillis, des produits artisanaux, du poisson tout juste sorti de la mer et des spécialités locales. Une immersion authentique dans la vie quotidienne des Samarios.",
            source : '/src/assets/images/market.jpg',
            alt : "Santa Marta marché"
        },
        {
            title : "Sa gastronomie",
            text : "La cuisine de Santa Marta reflète parfaitement la diversité de la région : poisson au lait de coco, patacones croustillants, ceviche à la colombienne, arepas fraîches ou jus de fruits exotiques. Que ce soit dans un restaurant en bord de mer ou chez un petit vendeur local, chaque repas est une découverte.",
            source : '/src/assets/images/food.jpg',
            alt : "Santa Marta food"
        }
    ]

    const beachActivities = [
        {
            title : "Des plages urbaine",
            text : "Les plages urbaines comme El Rodadero ou Playa Los Cocos sont parfaites pour une journée animée : restaurants, musique, ambiance locale et baignade accessible toute la journée. Elles offrent un aperçu de l’énergie chaleureuse de la côte caraïbe.",
            source : '/src/assets/images/plages4.jpg',
            alt : "Plage a proximité de Santa Marta"
        },
        {
            title : "Aux plages isolées",
            text : "Pour ceux qui recherchent le calme, les plages isolées autour de Taganga, Playa Grande ou même les premières criques du parc Tayrona sont de véritables refuges naturels. Entourées de végétation luxuriante, elles permettent de profiter d’une eau claire loin de la foule.",
            source : '/src/assets/images/plages2.jpg',
            alt : "Plage a proximité de Santa Marta"
        },
        {
            title : "Jusqu'aux plages animées la nuit",
            text : "Certaines plages prennent vie après le coucher du soleil : bars en plein air, musique, danse et ambiance festive typiquement caraïbe. C’est l’occasion idéale de profiter d’une soirée pieds dans le sable tout en découvrant la culture locale.",
            source : '/src/assets/images/plages3.jpg',
            alt : "Plage à proximité de Santa Marta"
        }
    ]

    const jungleActivities = [
        {
            title : "Explorez la jungle de Magdalena",
            text : "La jungle qui entoure Santa Marta est un véritable sanctuaire naturel. Entre sentiers ombragés, panoramas sur la Sierra Nevada et rencontres avec la faune locale, chaque balade révèle une nouvelle facette de cet écosystème unique en Colombie.",
            source : '/src/assets/images/jungle2.jpg',
            alt : "jungle a proximité de Santa Marta"
        },
        {
            title : "Plongez au pied d'une cascade",
            text : "De nombreuses cascades se cachent au milieu de la végétation : certaines accessibles à pied, d’autres après une petite randonnée. Ce sont des lieux idylliques pour se rafraîchir, se détendre ou simplement profiter des sons de la nature loin de toute agitation.",
            source : '/src/assets/images/riviere.jpg',
            alt : "jungle a proximité de Santa Marta"
        },
        {
            title : "Naviguez au rhytme du Rio Magdalena",
            text : "Le Rio Magdalena, fleuve emblématique de la Colombie, traverse des paysages spectaculaires. Une balade en bateau permet d’admirer la jungle sous un autre angle, d’observer des animaux sauvages et de découvrir des communautés locales vivant au bord de l’eau.",
            source : '/src/assets/images/jungle3.jpg',
            alt : "Rio magdalena à proximité de Santa Marta"
        },
        {
            title : "Admirez la faune tropicale",
            text : "La région abrite une faune incroyablement riche : singes, toucans, aras, papillons géants et une multitude d’espèces endémiques. Que vous soyez amateur de photographie ou simple curieux, chaque sortie est l’occasion d’observer des animaux dans leur habitat naturel.",
            source : '/src/assets/images/bird.jpg',
            alt : "perroquet à proximité de Santa Marta"
        }
    ]
    
    return(
        <>
            <Banner
                source='/src/assets/images/magdalena.jpg'
                alt="patio de l'auberge del Porvenir"
                title={t('pageTitle')}
            />
            <LocationsIntro 
                title={t('title')}
                text={t('textIntro')}
            />
            <Activity 
                title={t('activityTitle1')}
                text={t('activityText1')}
                source="/src/assets/images/santamarta2.jpg"
                alt="Santa Marta"
                activities={townActivities}
            />
            <Cta 
                title={t('ctaTitle')}
                text={t('ctaText')}
                linkUrl1={tCta('linkUrl1')}
                linkUrl2={tCta('linkUrl2')}
                linkText1={tCta('linkText1')}
                linkText2={tCta('linkText2')}
            />
            <Activity 
                title={t('activityTitle2')}
                text={t('activityText2')}
                source="/src/assets/images/plages.jpg"
                alt="plage a proximité de Santa Marta"
                activities={beachActivities}
            />
            <Cta 
                title={t('ctaTitle2')}
                text={t('ctaText2')}
                linkUrl1={tCta('linkUrl1')}
                linkUrl2={tCta('linkUrl2')}
                linkText1={tCta('linkText1')}
                linkText2={tCta('linkText2')}
            />
            <Activity 
                title={t('activityTitle3')}
                text={t('activityText3')}
                source="/src/assets/images/jungle.jpg"
                alt="Santa Marta"
                activities={jungleActivities}
            />
        </>
    )
}