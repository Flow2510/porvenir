import HalfHero from "../components/halfhero/halfhero";

import heroBackground from '../assets/images/maison-ciel.jpg'
import videoBackground from '../assets/video/jungle.mp4'

import Brand from "../components/brand/brand";


export default function Localisation(){
    return(
        <main>
            <HalfHero
                image={heroBackground}
                title={'Localisation'}
                text={'Perspiciatis distinctio quasi assumenda id ad quisquam officiis dolores fugiat consectetur aperiam iure enim? Optio?'}
            />
            <Brand 
                videoBackground={videoBackground}
            />
        </main>
    )
}