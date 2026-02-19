import './intro.scss';

export default function Intro() {
    return(
        <section className='intro'>
            <div className='intro__content'>
                <h2 className='intro__content-title'>Title</h2>
                <p className="intro__content-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ea et distinctio, porro blanditiis reiciendis repellat nam, numquam dolor sed laboriosam id corrupti quas maiores eaque in quisquam molestias similique.</p>
                <p className="intro__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum perspiciatis neque ducimus rem vitae unde distinctio quas, placeat dolorem temporibus expedita facere optio error? Nihil maxime vero molestiae assumenda.</p>
                <p className="intro__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe iure eius officiis non atque id, nostrum voluptates praesentium tenetur perferendis blanditiis amet excepturi earum porro architecto animi aliquam sunt.</p>
            </div>
            <video className='intro__video' autoPlay loop muted src="/src/assets/video/jungle-beach.mp4">

            </video>
        </section>
    )
}