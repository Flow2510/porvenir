import './cta.scss';

export default function Cta() {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <h2>Title</h2>
                <p className='cta__content-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi delectus magni vero exercitationem odit accusantium, voluptatem nihil earum saepe incidunt deserunt consectetur iusto error? Doloremque praesentium consectetur commodi deserunt sapiente.</p>
            </div>
            <button className='cta__button'><p>Check Avaibility</p> <span>→</span></button>
        </section>
    )
}