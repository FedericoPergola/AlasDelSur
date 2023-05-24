import React from 'react'
import '../styles/Vehicles.css'

const Vehicles = () => {
  return (
    <section id='vehicles'>
      <h3>Nuestra Flota</h3>
        <div className='d-flex mt-5'>
          <div className='vehicles-container'>
            <img src='../../img/spin.png' alt='#'/>
            <p className='pt-5'>Capacidad maxima 4 personas</p>
          </div>
          <div className='vehicles-container'>
            <img src='../../img/renault.avif' alt='#'/>
            <p className='pt-2'>Capacidad maxima 14 personas</p>
          </div>
        </div>
    </section>
  )
}

export default Vehicles