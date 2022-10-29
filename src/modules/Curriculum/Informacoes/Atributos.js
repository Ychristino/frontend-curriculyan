// React Imports
import React from 'react';
import { useState, useEffect } from 'react';


// Modules Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

//Api
import AtributoService from '../../../services/AtributoService';

function Atributos(props){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);

    useEffect(()=> {
        new AtributoService().listarAtributos(props.curriculoId)
            .then(resposta => {
                //Backend aceita paginação... para isso apenas utilizar o formato: 'curriculo?page=0&size=2&sort=titulo,asc
                setData(resposta.content);
                setisLoading(false);
            })
    }, [isLoading]);

    
    if (isLoading)return (
        <>
            <Spinner animation="grow" />
        </>) 
        
    return(
        <>
            <Row
                className='mb-2' 
                md={1} 
                lg={2}
            >
                
                {data.map((atributo, key)=>
                    <Col md={12} lg={6} key={key}>
                        {atributo.descricao}
                        <hr/>
                    </Col>
                )}
                
            </Row>
        </>
    )
}
export default Atributos;