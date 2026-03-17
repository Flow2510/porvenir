import './amenities.scss';

export default function Amenities() {
    const data = [
        {
            title: "Title",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure veniam, voluptatum laborum omnis ea quod."
        },
        {
            title: "Title",
            text: "Repellat iure veniam, voluptatum laborum omnis ea quod, tenetur sunt perferendis tempore exercitationem."
        },
        {
            title: "Title",
            text: "Tenetur sunt perferendis tempore exercitationem nostrum eligendi reiciendis asperiores recusandae odit possimus."
        },
        {
            title: "Title",
            text: "Repellat iure veniam, voluptatum laborum omnis ea quod, tenetur sunt perferendis tempore exercitationem."
        },
    ]
    return(
        <section className='amenities'>
            <div className='amenities__content'>
                <h2 className='amenities__content-title'>Title</h2>
                <p className='amenities__content-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptatibus, recusandae, doloribus facilis aspernatur soluta temporibus molestiae ipsam ut deleniti consequuntur iusto sapiente eum molestias odio in hic quae rem.</p>
            </div>
            <div className='amenities__gallery'>
                {data.map((d, index) => (
                    <article key={index + d.text} className='amenities__article'>
                        <h3 className='amenities__article-title'>{d.title}</h3>
                        <p className='amenities__article-text'>{d.text}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}