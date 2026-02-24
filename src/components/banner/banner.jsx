import Marquee from "react-fast-marquee";
import './banner.scss';
import ItemBanner from "../item-banner/item-banner";

const items = [
    "Tropical Garden",
    "Peaceful Atmosphere",
    "Authentic Experience",
    "Nature & Comfort",
    "Relax & Recharge"
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