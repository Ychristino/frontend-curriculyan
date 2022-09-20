// React Imports
import React from 'react';
import { ListGroup } from 'react-bootstrap';


// Modules Imports
// Bootstrap Imports
import MostraData from '../../../Filtros/MostraData';
import OrdenaData from '../../../Filtros/OrdenaData';

function Formacoes(props){
    const data = OrdenaData(props.formacoes, 'data', 'asc')


    return(
        <>
            <ListGroup variant="flush">
            {data.map((formacao, key)=>
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