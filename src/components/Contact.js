import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import '../styles/Contact.css'


const Contact = () => {
    const showAlert = () =>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Mensaje enviado',
        toast: true,
        showConfirmButton: false,
        timer: 3500,
    })
     }
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xfmbr47', 'template_6sj445r', form.current, '21mmw6cL4VdtOPAoe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset() 
        showAlert()

    };

    

    return (
    <div id='contact'>
        <div className='contact-title'>
            <h3 className=''>CONTACTO</h3>
            {/* <p>¿Tenes algo que decirnos o preguntarnos? ¡Nos encantaría escucharlo!</p> */}
        </div>
        <div className='contact-content d-flex justify-content-center flex-row'>
            <div >
                {/* <form ref={form} onSubmit={sendEmail} action='' className='d-flex flex-column'> */}
                <form ref={form} onSubmit={sendEmail} action='' className='d-flex flex-column'>
                    <input type="text" name="name" placeholder='Nombre completo' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="number" name="number" placeholder='Teléfono' required />
                    <textarea name="message" rows="7" placeholder='Tu Mensaje' required />
                    <p>Los datos que nos facilites tienen carácter confidencial y no serán cedidos a terceras personas.</p>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Contact