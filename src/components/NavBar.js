import React from 'react'
import "../styles/NavBar.css"

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#home">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item px-3 py-1">
                                <a class="nav-link active" aria-current="page" href="#about">Inico</a>
                            </li>
                            <li class="nav-item px-3 py-1">
                                <a class="nav-link active" href="#transfers">Traslados</a>
                            </li>
                            <li class="nav-item px-3 py-1">
                                <a class="nav-link active" href="#vehicles">Nuestra Flota</a>
                            </li>
                            <li class="nav-item px-3 py-1">
                                <a class="nav-link active" href="#faqs">Preguntas Frecuentes</a>
                            </li>
                            <li class="nav-item px-3 py-1">
                                <a class="nav-link active" href="#vehicles">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar