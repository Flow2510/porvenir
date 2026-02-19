import './brand.scss';

export default function Brand() {
    return(
        <section className='brand'>
            <div className='brand__content'>
                <h1 className='brand__content-title'>LOGO</h1>
            </div>
            <img className='brand__image' src="/src/assets/images/cabane-crepuscule.jpg" alt="" />
        </section>
    )
}