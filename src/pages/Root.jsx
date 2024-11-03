//componente principal con la barra de navegacin(renderiza contenido de las ruta ntrnas)
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

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
                <h1>CryptoCoin</h1>
                <Outlet />
            </main>
        </div>
    );
}

export default Root;
