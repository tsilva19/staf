import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps ={
    title: 'Reservar Colaborador'
}

export default class Reserve extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Inserir Reserva
            </Main>
        )
    }
}