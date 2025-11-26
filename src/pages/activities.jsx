import { useTranslation } from "react-i18next";
import Banner from "../assets/components/banner/banner";
import LocationsIntro from "../assets/components/locationintro/locationsintro";
import Activity from "../assets/components/activity/activity";

export default function Activities() {
    const { t } = useTranslation('activities');
    const townActivities = [
        {
            title : "Visitez la ville de Santa Marta",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/street2.jpg',
            alt : "Santa Marta street"
        },
        {
            title : "Son architecture",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/street.jpg',
            alt : "Santa Marta street"
        },
        {
            title : "Ses marchés locaux",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas.",
            source : '/src/assets/images/market.jpg',
            alt : "Santa Marta marché"
        },
        {
            title : "Sa gastronomie",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/food.jpg',
            alt : "Santa Marta food"
        }
    ]

    const beachActivities = [
        {
            title : "Des plages urbaine",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/plages4.jpg',
            alt : "Plage a proximité de Santa Marta"
        },
        {
            title : "Aux plages isolées",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/plages2.jpg',
            alt : "Plage a proximité de Santa Marta"
        },
        {
            title : "Jusqu'aux plages animées la nuit",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/plages3.jpg',
            alt : "Plage à proximité de Santa Marta"
        }
    ]

    const jungleActivities = [
        {
            title : "Explorez la jungle de Magdalena",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/jungle2.jpg',
            alt : "jungle a proximité de Santa Marta"
        },
        {
            title : "Plongez au pied d'une cascade",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/riviere.jpg',
            alt : "jungle a proximité de Santa Marta"
        },
        {
            title : "Naviguez au rhytme du Rio Magdalena",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
            source : '/src/assets/images/jungle3.jpg',
            alt : "Rio magdalena à proximité de Santa Marta"
        },
        {
            title : "Admirez la faune tropicale",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem eos, quaerat ab corporis deleniti autem praesentium molestiae placeat alias enim error nesciunt eaque doloribus voluptas. Aliquam earum blanditiis aperiam!",
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
            <Activity 
                title={t('activityTitle2')}
                text={t('activityText2')}
                source="/src/assets/images/plages.jpg"
                alt="plage a proximité de Santa Marta"
                activities={beachActivities}
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