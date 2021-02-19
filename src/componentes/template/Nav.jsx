import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/home">
                Colaboradores
            </Link>
            <Link to="/allocated">
                Alocar Colaborador
            </Link>
            <Link to="/reserve">
                 Reservar Colaborador
            </Link>
        </nav>
    </aside>