// React Imports
import React from 'react';


// Modules Imports
import MostraData from '../../../Filtros/MostraData';
import OrdenaData from '../../../Filtros/OrdenaData';
// Bootstrap Imports
import Accordion from 'react-bootstrap/Accordion';

function Experiencias(props){
    const data = OrdenaData(props.experiencias, 'dataInicio', 'asc')

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