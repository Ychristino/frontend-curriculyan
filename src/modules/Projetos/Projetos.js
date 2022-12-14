// React Imports
import React from 'react';
import { useState, useEffect } from 'react';

// Modules Imports

// Bootstrap Imports
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

//Api
import ProjetoService from '../../services/ProjetoService';

function Projetos(){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    
    useEffect(()=> {
        //Backend aceita paginação... para isso apenas utilizar o formato: 'projeto?page=0&size=2&sort=titulo,asc'
        new ProjetoService().listarProjeto()
            .then(resposta => {
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
            <Accordion 
                flush
                alwaysOpen
                className='mb-2'  
            >
                {data.map((projeto, key) =>
                    <Accordion.Item 
                        className='mb-2'  
                        eventKey={key} 
                        key={key}
                    >
                        <Accordion.Header>{projeto.titulo}</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mb-3'>
                                {projeto.descricao}
                            </Row>
                            <Row>
                                <Button
                                    className='mb-2'  
                                    variant="outline-secondary"
                                    href={projeto.link}
                                >
                                    Conhecer
                                </Button>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                )}    
            </Accordion>  
        </>
    )
}

export default Projetos;