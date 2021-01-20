import React from 'react';
import styled from "@emotion/styled";
import { primeraMayuscula } from '../Helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem 1rem 2.245rem 1rem;
    text-align: center;
    background-color: #00838F;
    color:#fff;
    margin-top: 1rem;
    
`;

const Resumen = ({ datos }) => {

    // extraer datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>
    );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;