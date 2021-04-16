import React, { Fragment } from 'react';
import banner from '../img/coffee.jpg';

const Inicio = () => {
    return (
        <Fragment>
            <img src={banner} alt="fondo de la cafetería" className="w-100"/>
        </Fragment>
    );
};

export default Inicio;