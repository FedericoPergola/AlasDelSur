import React from 'react'
import '../styles/Faqs.css'

const Faqs = () => {
  return (
    <>
    <div id='faqs'>
     <h3>Preguntas Frecuentes</h3>
      <div class="accordion pb-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Horario
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body fs-5">
            Nos adaptamos al horario del vuelo de nuestros pasajeros con reservas . Los horarios son sugeridos y pre acordados con los pasajeros y se diagraman según la cantidad de domicilios desde el lugar de origen.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Peso del equipaje
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body fs-5">
            1 bolso de mano 10kg y valija de 23km
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Desde donde salen los vehiculos
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body fs-5">
            Se coordina retirar a los clientes por sus hoteles o un punto de encuentro. Es a preferencia.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" >
            Medios de pago
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body fs-5">
            Se abona el servicio antes de la fecha a traves de transferencia
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='parallax parallax2 mt-5 '>
    </div>
  </>
  )
}

export default Faqs