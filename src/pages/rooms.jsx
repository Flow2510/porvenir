import Amenities from "../components/amenities/amenities";
import Cta from "../components/cta/cta";
import Extra from "../components/extra/extra";
import HorizontalGallery from "../components/horizontalgallery/horizontalgallery";
import VideoFeatures from "../components/videofeatures/videofeatures";
import VideoHero from "../components/videohero/videohero";
import videoBackground from '../assets/video/terasse.mp4'
import Brand from "../components/brand/brand";

import videoBrand from '../assets/video/jungle.mp4'

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
            <Brand
                videoBackground={videoBrand}
            />
        </main>
    )
}