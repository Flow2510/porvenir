import './features.scss';

const images = [
    "/src/assets/images/patio3.avif",
    "/src/assets/images/cuisine.avif",
    "/src/assets/images/terrasse2.webp"
    
]

const equipments = [
    "equipment 1",
    "equipment 2",
    "equipment 3",
    "equipment 4",
    "equipment 5",
    "equipment 6"
]

export default function Features() {
    return(
        <section className='features'>
            <div className='features__content'>
                <h2 className='features__content-title'>Title</h2>
                <ul className='features__content-list'>
                    {equipments.map((equipment, index) => (
                        <li className='features__content-item' key={equipment + index}><span>→</span> {equipment}</li>
                    ))}
                </ul>
            </div>
            <div className='features__gallery'>
                {images.map((image, index) => (
                    <img className='features__gallery-image' src={image} key={image + index} alt="" />
                ))}
            </div>
        </section>
    )
}