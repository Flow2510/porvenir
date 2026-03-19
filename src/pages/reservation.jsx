import heroBackground from "../assets/images/chambre-volet.jpg"
import GridSection from "../components/gridsection/gridsection";
import HalfHero from "../components/halfhero/halfhero";
import Brand from "../components/brand/brand";

import chambre from '../assets/images/chambre.jpg'
import chambre2 from '../assets/images/chambre2.jpg'

import videoBackground from '../assets/video/terasse.mp4'

export default function Reservation(){
    const data = [
        {
            image: chambre,
            title: "Booking",
            subtitle: "subtitle",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum neque perspiciatis optio deserunt laudantium nemo impedit explicabo eos recusandae totam vero error debitis ipsam eligendi nostrum perferendis quis fugit.",
            link: "https://www.booking.com/index.fr.html",
            textLink: "Reservez sur Booking.com"
        },
        {
            image: chambre2,
            title: "AirBnB",
            subtitle: "subtitle",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum neque perspiciatis optio deserunt laudantium nemo impedit explicabo eos recusandae totam vero error debitis ipsam eligendi nostrum perferendis quis fugit.",
            link: "https://www.airbnb.fr/",
            textLink: "Reservez sur AirBnB"
        }
    ]

    return(
        <main>
            <HalfHero
                image={heroBackground}
                title={'Reservation'}
                text={'Perspiciatis distinctio quasi assumenda id ad quisquam officiis dolores fugiat consectetur aperiam iure enim? Optio?'}
            />
            <GridSection 
                data={data}
            />
            <Brand 
                videoBackground={videoBackground}
            />
        </main>
    )
}