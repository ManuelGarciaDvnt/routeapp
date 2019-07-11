import React, { Component } from 'react';
import './../Styles/Contact.css';
import {Link} from 'react-router-dom';

export default class Contact extends Component{
    render(){
        return(
            <div>
                <header className='contact__header'>
                    Mantengámonos conectados
                </header>
                <main className='contact__main'>
                    <form className='contact__form'>
                        <div className='form-group'>
                            <div className='contact__input-group'>
                                <input id='inputName' className='contact__input'/>
                                <label htmlFor='inputName'>Nombre:</label>
                            </div>
                            <div className='contact__input-group'>
                                <input id='inputMail' className='contact__input'/>
                                <label htmlFor='inputMail'>E - mail:</label>
                            </div>
                        </div>
                        <div className='contact__input-group'>
                            <textarea id='inputMessage' className='contact__txtarea'></textarea>
                            <label htmlFor='inputMessage'>Mensaje:</label>
                        </div>
                        <div className='contact__btn-container'>
                            <div className='contact__links-container'>
                                <a className='contact__link' href='mailto:manueldev250799@gmail.com' target='_blank'>Contactar mediante GMAIL</a>
                                <a className='contact__link' href='https://github.com/ManuelGarciaDvnt' target='_blank'>My GitHub Zone</a>
                            </div>
                            <button className='btn btn--green'>{'Enviar mensaje :)'}</button>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}