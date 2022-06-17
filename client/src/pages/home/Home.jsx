import React, { useState } from 'react'

export const Home = () => {
    const [isLogged, setIsLogged] = useState(true);
    const token = localStorage.getItem('token');
    return(
        <>
            {isLogged ? <h1>{token}</h1> : <button><a href="http://localhost:3001/login">Fazer login</a></button>}
            {isLogged && <button onClick={() => setIsLogged(false)}>Sair</button>}
        </>
    )
}