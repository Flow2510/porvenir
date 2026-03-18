import videoBackground from '../assets/video/porvenir.mp4'
import Brand from '../components/brand/brand';
import Cta from '../components/cta/cta';
import FixedHero from "../components/fixedhero/fixedhero";
import GridSection from '../components/gridsection/gridsection';

export default function About(){
    return(
        <main>
            <FixedHero 
                video={videoBackground}
                title={'Découvrez Santa Marta'}
                text={'Perspiciatis distinctio quasi assumenda id ad quisquam officiis dolores fugiat consectetur aperiam iure enim? Optio?'}
            />
            <GridSection />
            <Brand />
            <Cta
                title={"Prêt à vivre l’expérience Porvenir ?"}
                text={"Entre jungle luxuriante et rivière paisible, l’Auberge del Porvenir vous accueille pour une parenthèse hors du temps. Que vous voyagiez en couple, entre amis ou en solo, venez découvrir un lieu authentique entre Santa Marta et Minca."}
                link={"Consulter nos hébergements"}
                to={""}
            />
        </main>
    )
}