// React Imports
import React, { useCallback, useRef } from 'react';
import { useState, useEffect } from 'react';


// Modules Imports
// Bootstrap Imports
import { ListGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';


//Filtros/Displays
import MostraData from '../../../Filtros/MostraData';

//Service
import FormacaoService from '../../../services/FormacaoService';

function Formacoes(props){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);

    useEffect(()=> {
        new FormacaoService().listarFormacao(props.curriculoId)
            .then(resposta => {
                //Backend aceita paginação... para isso apenas utilizar o formato: 'curriculo?page=0&size=2&sort=titulo,asc
                setData(e=> resposta.content);
                setisLoading(false);
            })
    }, [isLoading]);

    if (isLoading)return (
        <>
            <Spinner animation="grow" />
        </>) 

    return(
        <>
            <ListGroup variant="flush">
            {data.map((formacao, key)=>
                <ListGroup.Item key={key}>
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