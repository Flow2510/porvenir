import Marquee from "react-fast-marquee";
import './banner.scss';
import ItemBanner from "../item-banner/item-banner";

const items = [
    "Exemple 1",
    "Exemple 2",
    "Exemple 3",
    "Exemple 4",
    "Exemple 5"
]

export default function Banner() {
    return(
        <section className='banner'>
            <Marquee
                className='banner__wrapper'
            >
                {items.map((i, index) => (
                    <ItemBanner
                        key={i + index}
                        text={i}
                    />
                ))}
            </Marquee>
        </section>
    )
}