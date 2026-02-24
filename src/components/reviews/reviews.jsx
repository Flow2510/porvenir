import { motion } from 'motion/react'
import Review from '../review/review'
import './reviews.scss'

const reviews = [
    {
        logo: "",
        name: "Dupont J.",
        info: "Subtitle",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eos repudiandae architecto voluptates ea iusto, officia maxime inventore quasi perferendis iste quibusdam vero laborum amet molestias quae dolor velit quidem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        stars: 5
    },
    {
        logo: "",
        name: "Name",
        info: "Subtitle",
        text: "Repellendus eos repudiandae architecto voluptates ea iusto, officia maxime inventore quasi perferendis iste quibusdam vero laborum amet molestias quae dolor velit quidem?",
        stars: 5
    },
    {
        logo: "",
        name: "Name",
        info: "Subtitle",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eos repudiandae architecto voluptates ea iusto, officia maxime inventore quasi perferendis iste quibusdam vero laborum amet molestias quae dolor velit quidem?",
        stars: 5
    },
    {
        logo: "",
        name: "Name",
        info: "Subtitle",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eos repudiandae architecto voluptates ea iusto, officia maxime inventore quasi perferendis iste quibusdam vero laborum amet molestias quae dolor velit quidem?",
        stars: 5
    }
]

export default function Reviews() {
    return(
        <section className='reviews'>
            <div className='reviews__content'>
                <motion.h2 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='reviews__content-title'
                >
                    Ce que nos clients disent
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='reviews__content-subtitle'
                >
                    Des expériences authentiques partagées par nos voyageurs.
                </motion.p>
            </div>
            <div className='reviews__gallery'>
                {reviews.map((review, index) => (
                    <Review 
                        text={review.text}
                        key={review.name + index}
                        logo={'https://avatars.githubusercontent.com/u/157888733?s=400&u=c57ef6316a76f38d56047343de0cea7e05487e27&v=4'}
                        name={review.name}
                        info={review.info}
                        stars={review.stars}
                        link={"#"}
                    />
                ))}
            </div>
        </section>
    )
}