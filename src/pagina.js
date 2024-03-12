


const pagina = (props) => {
    return `
    
        <nav>
        <ul>
            <li>Inicio</li>
            <li>Lorem 1</li>
            <li>Lorem 2</li>
            <li>Contacto</li>
            <li>Acerca de</li>
        </ul>
    </nav>

    <h1>Hola mundo desde ${props}</h1>

    <button><a href="/"> Boton </a></button>

    <br>
    
    <footer>
        By Eduardo M Moreno
    </footer>
    `;
}

module.exports = pagina;