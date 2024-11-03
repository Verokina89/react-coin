//componente principal con la barra de navegacin(renderiza contenido de las ruta ntrnas)
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/img/logoCryptoMoneda.jpg'

function Root() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>
                </nav>
            </header>
            <main>
                <img src={logo} alt="logo CryptoCoin" style={{ maxWidth: '100%', height: 'auto' }} />
                <Outlet />
            </main>
        </div>
    );
}

export default Root;
