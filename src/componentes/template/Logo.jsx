import './Logo.css'
import logo from '../../assets/GFT-Logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="Logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>