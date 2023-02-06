import react from 'react';
import '../hojas-de-estilo/Boton.css'


function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return ( //onclick debe tener una funcion por eso se agrega '() =>', sin eso solo retorna un valor
        <div 
            className={`boton-contenedor ${esOperador(props.children)? 'operador': null}`.trim()}
            onClick ={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );

}

export default Boton;