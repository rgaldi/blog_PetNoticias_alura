import React from 'react';
import img from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Error404 = () => {
    return(
        <main className='container flex flex--centro flex--coluna'>
            <img src={img} className='doguito-imagem'/>
            <p className='naoencontrado-text'>Ops, a página não existe! </p>
        </main>
    )
}

export default Error404;