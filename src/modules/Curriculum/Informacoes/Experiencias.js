// React Imports
import React from 'react';
import { useState, useEffect } from 'react';


// Modules Imports
import MostraData from './MostraData';

// Bootstrap Imports
import Accordion from 'react-bootstrap/Accordion';

function Experiencias(props){
    console.log(props.experiencias)
    return(
        <>
            <Accordion 
                flush
                alwaysOpen
            >

                {props.experiencias.map((experiencia, key)=>
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