import './extra.scss'

import pool from '../../assets/images/swimming-pool_1925928.png'
import coffee from '../../assets/images/coffee-cup_924412.png'
import leaf from '../../assets/images/palm-leaf_11164856.png'

export default function Extra() {
    const data = [
        {
            icon: pool,
            title: "Piscine",
            text: "Tenetur sunt perferendis"
        },
        {
            icon: coffee,
            title: "Café",
            text: "Repellat iure veniam, voluptatum laborum"
        },
        {
            icon: leaf,
            title: "Nature",
            text: "Lorem ipsum dolor sit amet consectetur"
        }
    ]

    return(
        <section className='extra'>
            <div className='extra__content'>
                <h2 className='extra__content-title'>Title</h2>
                <p className='extra__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem, odit, iusto obcaecati recusandae natus, unde perspiciatis eligendi ducimus incidunt earum nobis. Tempore eos sint, recusandae ipsum eaque architecto eligendi?</p>
                <p className='extra__content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo fugit sint labore quibusdam quaerat, ipsum beatae aperiam illum corporis explicabo in amet eligendi nisi voluptatibus culpa officia saepe laudantium repellendus!</p>
            </div>
            <div className='extra__line'></div>
            <div className='extra__info'>
                <h3 className='extra__info-subtitle'>Subtitle</h3>
                <div className='extra__gallery'>
                    {data.map((d, index) => (
                        <div key={d.text + index} className='extra__wrapper'>
                            <img className='extra__wrapper-icon' src={d.icon} alt="" />
                            <h4 className='extra__wrapper-title'>{d.title}</h4>
                            <p className='extra__wrapper-text'>{d.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}