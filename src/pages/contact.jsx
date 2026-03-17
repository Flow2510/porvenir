import ContactForm from "../components/contactform/contactform";
import TextHero from "../components/texthero/texthero";

export default function Contact(){
    return(
        <main>
            <TextHero 
                title={"Contact"}
                text={'Perspiciatis distinctio quasi assumenda id ad quisquam officiis dolores fugiat consectetur aperiam iure enim? Optio?'}
            />
            <ContactForm />
        </main>
    )
}