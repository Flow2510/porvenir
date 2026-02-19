import Review from '../review/review'
import './reviews.scss'

const reviews = [
    {
        logo: "",
        name: "test",
        info: "test",
        stars: 5
    },
    {
        logo: "",
        name: "test2",
        info: "test",
        stars: 5
    },
    {
        logo: "",
        name: "test3",
        info: "test",
        stars: 5
    },
    {
        logo: "",
        name: "test4",
        info: "test",
        stars: 5
    }
]

export default function Reviews() {
    return(
        <section className='reviews'>
            <div className='reviews__content'>
                <h2 className='reviews__content-title'>Title</h2>
                <p className='reviews__content-subtitle'>Subtitle</p>
            </div>
            <div className='reviews__gallery'>
                {reviews.map((review, index) => (
                    <Review 
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eos repudiandae architecto voluptates ea iusto, officia maxime inventore quasi perferendis iste quibusdam vero laborum amet molestias quae dolor velit quidem?"}
                        key={review.name + index}
                        logo={review.logo}
                        name={review.name}
                        info={review.info}
                        stars={review.stars}
                    />
                ))}
            </div>
        </section>
    )
}