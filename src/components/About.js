import React from 'react'
import "../styles/About.css"

const About = () => {
  return (
    <section id='about'>
        <div className='about-container'>
            <div className='about-text'>
                <h3>Acerca de nosotros</h3>
                <p>Somos una empresa dedicada al traslado y transporte. Nos interesa que puedan tener una comoda experiencia del turismo en esta localidad con la calidez de viajar como en familia.</p>
            </div>
            <div className='about-img'>
                <img src='../../img/glaciar.jpg' alt='#' />
            </div>
        </div>
    </section>
  )
}

export default About