import React from 'react'
import '../styles/Transfers.css'

const Transfers = () => {
  return (
    <section id='transfers'>
        <h3 className='pb-4'>Traslados</h3>
        <div className='transfers-container'>
            <div className='transfers-card'>
                <div className='transfers-card-img'>
                    <img src='../../img/hotel-aeropuerto.jpg' alt='#'/>
                </div>
                <div className='trasfers-card-text'>
                    <h4>HOTEL - AEROPUERTO</h4>
                    <p className='pt-4'>Traslado del hotel al Aerpuerto, y del Aeropuerto al hotel. Acordamos con el cliente</p>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
        <div className='transfers-container'>
            <div className='transfers-card'>
                <div className='transfers-card-img'>
                    <img src='../../img/puerto-sombras.jpg' alt='#'/>
                </div>
                <div className='trasfers-card-text'>
                    <h4>PUERTO BAJO DE LAS SOMBRAS</h4>
                    <p className='pt-4'>Los llevamos hasta el puerto, para que realicen la excursion de minitrekking</p>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
        <div className='transfers-container'>
            <div className='transfers-card'>
                <div className='transfers-card-img'>
                    <img src='../../img/glaciar-moreno.jpg' alt='#'/>
                </div>
                <div className='trasfers-card-text'>
                    <h4>TRASLADO AL GLACIAR PERITO MORENO</h4>
                    <p className='pt-4'>Traslados al Glaciar Perito Moreno. Los buscamos por su hotel a la hora acordada.<br/> En el camino realizamos 2 paradas. -Mirador del lago - Mirador de los suspiros</p>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
        <div className='transfers-container'>
            <div className='transfers-card'>
                <div className='transfers-card-img'>
                    <img src='../../img/chalten.jpg' alt='#'/>
                </div>
                <div className='trasfers-card-text'>
                    <h4>TRASLADO AEROPUERTO CHALTEN</h4>
                    <p className='pt-4'>Recorrido desde el Aeropuerto a uno de los sitios emblematicos de la localidad</p>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
        <div className='transfers-container'>
            <div className='transfers-card'>
                <div className='transfers-card-img'>
                    <img src='../../img/puerto-bandera.jpg' alt='#'/>
                </div>
                <div className='trasfers-card-text'>
                    <h4>TRASLADO AL PUERTO PUNTA BANDERA</h4>
                    <p className='pt-4'>Conocerán todos los Glaciares y la estancia Cristina</p>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
        <div className='transfers-container'>
            <div className='transfers-card'>
                <div className='transfers-card-img'>
                    <img src='../../img/full-chalten.jpg' alt='#'/>
                </div>
                <div className='trasfers-card-text'>
                    <h4>FULL DAY CHALTEN</h4>
                    <p className='pt-4'>Salimos al Chalten, realizando paradas en La Leona, mirador del Lago Viedma, <br></br> Mirador del Chalten, y si el clima lo permite, <br></br> en la ruta podrán sacar fotos al Fitz Roy (Pico mas al de la Patagonia Sur)</p>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Transfers