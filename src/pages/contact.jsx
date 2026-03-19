import Brand from "../components/brand/brand";
import ContactForm from "../components/contactform/contactform";
import HalfHero from "../components/halfhero/halfhero";

import heroBackground from '../assets/images/patio.jpg'
import videoBackground from "../assets/video/jungle-beach.mp4"

export default function Contact(){
    return(
        <main>
            <HalfHero
                image={heroBackground}
                title={"Contact"}
                text={'Perspiciatis distinctio quasi assumenda?'}
            />
            <ContactForm />
            <Brand 
                videoBackground={videoBackground}
            />
        </main>
    )
}