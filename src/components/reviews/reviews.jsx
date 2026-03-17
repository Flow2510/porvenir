import { motion } from 'motion/react'
import Review from '../review/review'
import './reviews.scss'
import { useState } from 'react'

const data = [
    {
        logo: "",
        name: "Diana Peña",
        info: "Avis Google",
        text: `"L'auberge est un excellent choix pour se ressourcer au cœur de la nature dans la Sierra Nevada de Santa Marta. Ses espaces verts abritent une faune riche et variée : oiseaux chanteurs, araignées, iguanes, etc. Un sentier de randonnée permet d'admirer Santa Marta depuis son sommet. Un service de transport est également disponible (avec supplément). Enfin, une machine à café est à votre disposition pour préparer un délicieux café."`,
        stars: 5,
        link: "https://maps.app.goo.gl/emXbXwFfHMM6Qssx6"
    },
    {
        logo: "",
        name: "Yeison Pinzón",
        info: "Avis Google",
        text: `"L'hébergement est très agréable. Ils proposent des jeux de société très divertissants. Les guides étaient également très sympathiques et l'endroit est très confortable. J'y retournerai."`,
        stars: 5,
        link: "https://maps.app.goo.gl/iMh3bQ6NG8bU4pb88"
    },
    {
        logo: "",
        name: "Lorena Sánchez",
        info: "Avis Google",
        text: `"Un endroit exceptionnel pour passer du temps en famille, en couple ou entre amis. Si vous recherchez un lieu paisible en pleine nature, c'est l'endroit idéal."`,
        stars: 5,
        link: "https://maps.app.goo.gl/B4ynYmsc5kUToSHX8"
    }
]

export default function Reviews() {
    const [reviews, setReviews] = useState(data)

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
                        name={review.name}
                        info={review.info}
                        stars={review.stars}
                        link={review.link}
                    />
                ))}
            </div>
        </section>
    )
}