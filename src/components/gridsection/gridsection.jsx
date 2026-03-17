import './gridsection.scss';

import santaMarta from '../../assets/images/santamarta.jpg'
import minca from '../../assets/images/minca.jpg'
import beach from '../../assets/images/plage.jpg'
import magdalena from '../../assets/images/fleuve.jpg'

export default function GridSection() {
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
        <section className='grid-section'>
            {data.map((d, index) => (
                <div key={d.title + d.text + index} className='grid-section__wrapper'>
                    <img src={d.image} alt="" className='grid-section__image'/>
                    <div className='grid-section__content'>
                        <h2 className='grid-section__content-title'>{d.title}</h2>
                        <p className='grid-section__content-text'>{d.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}