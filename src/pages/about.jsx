
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

export default function About(){
    const data = [
        {
            image: santaMarta,
            title: "Santa Marta",
            subtitle: "subtitle",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum neque perspiciatis optio deserunt laudantium nemo impedit explicabo eos recusandae totam vero error debitis ipsam eligendi nostrum perferendis quis fugit."
        },
        {
            image: minca,
            title: "Minca",
            subtitle: "subtitle",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum neque perspiciatis optio deserunt laudantium nemo impedit explicabo eos recusandae totam vero error debitis ipsam eligendi nostrum perferendis quis fugit."
        },
        {
            image: beach,
            title: "Tayrona",
            subtitle: "subtitle",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum neque perspiciatis optio deserunt laudantium nemo impedit explicabo eos recusandae totam vero error debitis ipsam eligendi nostrum perferendis quis fugit."
        },
        {
            image: magdalena,
            title: "Magdalena",
            subtitle: "subtitle",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum neque perspiciatis optio deserunt laudantium nemo impedit explicabo eos recusandae totam vero error debitis ipsam eligendi nostrum perferendis quis fugit."
        },
    ]

    return(
        <main>
            <FixedHero 
                image={image}
                title={'Découvrez Santa Marta'}
                text={'Perspiciatis distinctio quasi assumenda id ad quisquam officiis dolores fugiat consectetur aperiam iure enim? Optio?'}
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
                title={"Prêt à vivre l’expérience Porvenir ?"}
                text={"Entre jungle luxuriante et rivière paisible, l’Auberge del Porvenir vous accueille pour une parenthèse hors du temps. Que vous voyagiez en couple, entre amis ou en solo, venez découvrir un lieu authentique entre Santa Marta et Minca."}
                link={"Consulter nos hébergements"}
                to={""}
            />
        </main>
    )
}