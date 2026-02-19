import './presentation.scss';

const images = [
    "/src/assets/images/jardin3.png",
    "/src/assets/images/patio.avif",
    "/src/assets/images/jardin.avif",
    "/src/assets/images/chambre.avif"
]

export default function Presentation() {
    return(
        <section className='presentation'>
            <div className='presentation__content'>
                <h2 className='presentation__content-title'>Title</h2>
                <p className='presentation__content-subtitle'>Subtitle</p>
            </div>
            <div className='presentation__gallery'>
                <video loop muted autoPlay className='presentation__gallery-video' src="/src/assets/video/jungle.mp4"></video>
                <div className='presentation__gallery-wrapper'>
                    {images.map((image, index) => (
                        <img className='presentation__gallery-image' src={image} key={index + image} alt="" />
                    ))}
                </div>
            </div>
        </section>
    )
}