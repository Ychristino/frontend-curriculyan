// React Imports
import React from 'react';
import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';


// Modules Imports
// Bootstrap Imports
import Card from 'react-bootstrap/Card';
import MostraData from './MostraData';

function Formacoes(props){
    console.log(props.formacoes)
    return(
        <>
            <ListGroup variant="flush">
            {props.formacoes.map((formacao, key)=>
                <ListGroup.Item>
                    <h2>{(MostraData(formacao.data)) }</h2>
                    
                    <p>
                        {(`${formacao.curso} - ${formacao.instituicao}`).toUpperCase()}
                    </p>
                </ListGroup.Item>
             
            )}
            </ListGroup>
        </>
    )
}
export default Formacoes;