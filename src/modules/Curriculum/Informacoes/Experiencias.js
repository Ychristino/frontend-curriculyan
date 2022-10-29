// React Imports
import React from 'react';
import { useState, useEffect } from 'react';

// Modules Imports

// Bootstrap Imports
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';


//Filtros/Displays
import MostraData from '../../../Filtros/MostraData';
import OrdenaData from '../../../Filtros/OrdenaData';

//Api
import apiCurriculo from '../../../api/ApiCurriculo';
import ExperienciaService from '../../../services/ExperienciaService';

function Experiencias(props){
    
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);

    useEffect(()=> {
        new ExperienciaService().listarExperiencia(props.curriculoId)
            .then(resposta => {
                //Backend aceita paginação... para isso apenas utilizar o formato: 'curriculo?page=0&size=2&sort=titulo,asc
                setData(resposta.content);
                setisLoading(false);
            })
    }, [isLoading]);

    // const data = OrdenaData(props.experiencias, 'dataInicio', 'asc')

    if (isLoading)return (
        <>
            <Spinner animation="grow" />
        </>) 

    return(
        <>
            <Accordion 
                flush
                alwaysOpen
            >

                {data.map((experiencia, key)=>
                    <Accordion.Item 
                        className='mb-2' 
                        eventKey={key} 
                        key={key}
                    >

                        <Accordion.Header>
                            {`${experiencia.cargo} - ${MostraData(experiencia.dataInicio)} A ${MostraData(experiencia.dataFim)}`.toUpperCase()}
                        </Accordion.Header>
                    
                        <Accordion.Body>
                            <h1>
                                {experiencia.empregador}
                            </h1>

                            <hr/>
                            
                            <p>
                                {experiencia.descricao}
                            </p>
                            
                        </Accordion.Body>
                    
                    </Accordion.Item>
                    )}

            </Accordion>    
        </>
    )
}
export default Experiencias;