import videoBackground from '../assets/video/porvenir.mp4'
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
            <section style={{ height: '100vh', width: '100%', background: "white", position: 'relative' }}></section>
        </main>
    )
}