// React Imports
import React from 'react';

// Modules Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Atributos(props){
    console.log(props.atributos)
    return(
        <>
            <Row
                className='mb-2' 
                md={1} 
                lg={2}
            >
                
                {props.atributos.map((atributo, key)=>
                    <Col md={12} lg={6}>
                        {atributo.descricao}
                        <hr/>
                    </Col>
                )}
                
            </Row>
        </>
    )
}
export default Atributos;