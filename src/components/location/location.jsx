import './location.scss';

export default function Location() {
    return(
        <section className='location'>
            <div className='location__content'>
                <div className='location__content-wrapper'>
                    <h2 className='location__content-title'>Title</h2>
                    <p className='location__content-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ducimus reiciendis adipisci sed beatae facere ea mollitia porro at? Doloribus totam sequi ab possimus autem odit iusto beatae nostrum tempora?</p>
                    <p className='location__content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, tenetur cumque culpa obcaecati, tempora a illum soluta optio nesciunt modi voluptas sequi qui amet perferendis delectus quo sint mollitia voluptate!</p>
                </div>
                <div className='location__line'></div>
                <div className='location__info'>
                    <div className='location__info-wrapper'>
                        <p>From Santa Marta</p>
                        <p>5mn</p>
                    </div>
                    <div className='location__info-wrapper'>
                        <p>From Barranquilla</p>
                        <p>30mn</p>
                    </div>
                    <div className='location__info-wrapper'>
                        <p>From Cartagena de Indias</p>
                        <p>2h</p>
                    </div>
                </div>
            </div>
            <img className='location__image' src="/src/assets/images/santamarta.jpg" alt="" />
        </section>
    )
}