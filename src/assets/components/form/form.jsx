// eslint-disable-next-line
import { motion } from 'motion/react';
import './form.scss';
import { useEffect, useState } from 'react';

export default function Form(){
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (email === "") {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (subject === "") {
            setSubjectError(true);
        } else {
            setSubjectError(false);
        }

        if (message === "") {
            setMessageError(true);
        } else {
            setMessageError(false);
        }

        if (message !== "" && subject !=="" && email !== "" && name !== ""){
            setFormOutput(
                {
                    name : name,
                    email : email,
                    subject : subject,
                    message : message
                }
            );
            e.target.reset();
        }
    }
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [subject, setSubject] = useState("");
    const [subjectError, setSubjectError] = useState(false);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);
    const [formOutput, setFormOutput] = useState({});

    useEffect(() => {
        console.log(formOutput);
    }, [formOutput])

    return(
        <form action="" className='form' onSubmit={handleSubmit}>
            <label className='form__label' htmlFor="">
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='form__label-subtitle'
                >
                    Nom:
                </motion.p>
                <motion.input
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }} 
                    className={`form__label-input${nameError? " form__label-input--error" : ""}`} 
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    name="" 
                    id="" 
                />
                {nameError &&
                    <p className='form__error form__error--name'>Veuillez mettre un nom</p>
                }
            </label>
            <label className='form__label' htmlFor="">
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }} 
                    className='form__label-subtitle'
                >
                    Email:
                </motion.p>
                <motion.input
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className={`form__label-input${emailError? " form__label-input--error" : ""}`} 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    name="" 
                    id="" 
                />
                {emailError &&
                    <p className='form__error form__error--email'>Veuillez mettre un email</p>
                }
            </label>
            <label className='form__label' htmlFor="">
                <motion.p
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }} 
                    className='form__label-subtitle'
                >
                    Sujet:
                </motion.p>
                <motion.input
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className={`form__label-input${subjectError? " form__label-input--error" : ""}`} 
                    onChange={(e) => setSubject(e.target.value)}
                    type="text" 
                />
                {subjectError &&
                    <p className='form__error form__error--subject'>Veuillez mettre un sujet</p>
                }
            </label>
            <label className='form__label' htmlFor="">
                <motion.p 
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    className='form__label-subtitle'
                >
                    Message:
                </motion.p>
                <motion.textarea
                    initial={{ y: 50 }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }} 
                    className={`form__label-textarea${messageError? " form__label-textarea--error" : ""}`} 
                    onChange={(e) => setMessage(e.target.value)}
                    name="" id=""
                >
                </motion.textarea>
                {messageError &&
                    <p className='form__error form__error--message'>Veuillez mettre un message</p>
                }
            </label>
            <motion.button 
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                className='form__button' 
                type='submit'
            >
                Envoyer un message
            </motion.button>
        </form>
    )
}