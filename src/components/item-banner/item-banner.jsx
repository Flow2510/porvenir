import "./item-banner.scss";

export default function ItemBanner({ text }){
    return(
        <article className="item-banner">
            <div className="item-banner__line"></div>
            <p className="item-banner__text">{text}</p>
            <div className="item-banner__line"></div>
        </article>
    )
}