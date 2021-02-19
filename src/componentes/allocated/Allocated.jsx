import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps ={
    title: 'Alocar Colaborador'
}

export default class Allocated extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Inserir Alocação
            </Main>
        )
    }
}