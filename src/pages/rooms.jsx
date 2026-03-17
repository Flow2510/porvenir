import Amenities from "../components/amenities/amenities";
import Cta from "../components/cta/cta";
import Extra from "../components/extra/extra";
import HorizontalGallery from "../components/horizontalgallery/horizontalgallery";
import VideoFeatures from "../components/videofeatures/videofeatures";
import VideoHero from "../components/videohero/videohero";
import videoBackground from '../assets/video/terasse.mp4'

export default function Rooms({ isMobile }){
    return(
        <main>
            <VideoHero 
                color={'#32322b91'}
                title={"L'auberge"}
                subtitle={"Santa Marta, Colombie"}
                videoBackground={videoBackground}
            />
            <HorizontalGallery 
                isMobile={isMobile}
            />
            <VideoFeatures />
            <Amenities />
            <Extra />
            <Cta 
                title={"Title"}
                text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis nostrum vero? Facere error adipisci culpa consequatur expedita ea quam reprehenderit aspernatur, eos iusto alias dolorum doloremque vitae, ex minima."}
                link={"link"}
                to={""}
            />
        </main>
    )
}