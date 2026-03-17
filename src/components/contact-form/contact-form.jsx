import './contact-form.scss'

export default function ContactForm(){
    return(
        <section className='contact-form'>
            <form 
                action="" 
                className='contact-form__form'
            >
                <label htmlFor="" className='contact-form__label'>
                    <p>Nom:</p>
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="" className='contact-form__label'>
                    <p>Email:</p>
                    <input type="email" name="" id="" />
                </label>
                <label htmlFor="" className='contact-form__label'>
                    <p>Message:</p>
                    <textarea name="" id=""></textarea>
                </label>
                <button className='contact-form__button'>Envoyer</button>
            </form>
        </section>
    )
}