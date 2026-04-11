import Marquee from "react-fast-marquee";
import './banner.scss';
import ItemBanner from "../item-banner/item-banner";

export default function Banner({ itemsBanner }) {
    return(
        <section className='banner'>
            <Marquee
                className='banner__wrapper'
            >
                {itemsBanner.map((i, index) => (
                    <ItemBanner
                        key={i + index}
                        text={i}
                    />
                ))}
            </Marquee>
        </section>
    )
}