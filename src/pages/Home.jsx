import React from 'react'
import Introduccion from '../sections/Introduccion/Introduccion'
import Eventos from '../sections/Eventos/Eventos'
import Proposito from '../sections/Proposito/Proposito'
import Estudios from '../sections/Estudios/Estudios'
import Libros from '../sections/Libros/Libros'
import Documentales from '../sections/Documentales/Documentales'
import Galeria from '../sections/Galeria/Galeria'
import Garantia from '../sections/Garantia/Garantia'
import Musica from '../sections/Musica/Musica'
import Biografia from '../sections/Biografia/Biografia'

const Home = React.memo(() => (
    <div>
        <Introduccion />
        <Biografia />
        <Eventos />
        <Proposito />
        <Estudios />
        <Libros />
        <Documentales />
        <Musica />
        <Galeria />
        <Garantia />
    </div>
));

export default Home