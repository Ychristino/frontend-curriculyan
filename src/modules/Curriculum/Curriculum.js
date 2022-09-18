// React Imports
import React from 'react';
import { useState, useEffect } from 'react';

// Modules Imports
import Formacoes from './Informacoes/Formacoes';
import Experiencias from './Informacoes/Experiencias';
import Atributos from './Informacoes/Atributos';
import Atividades from './Informacoes/Atividades';
import Extras from './Informacoes/Extras';

// Bootstrap Imports
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';

function Curriculum(){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [card, setCard] = useState({});
    //VERIFICAR, ARRUMAR PARA BUSCAR DA API OU MELHORAR A CONSTRUÇÃO 
    const [abas, setAbas] = useState([{}]);
    
    useEffect(()=> {
        axios.get("http://localhost:8080/curriculo/1")
            .then(resposta => {
                setData(resposta.data);
                setAbas([{
                    titulo:'Atividades Atuais',
                    corpo:<Atividades atividadesAtuais={resposta.data.atividadesAtuais} />,
                },
                {
                    titulo:'Formações',
                    corpo:<Formacoes formacoes={resposta.data.formacoes} />,
                },
                {
                    titulo:'Experiências',
                    corpo:<Experiencias experiencias={resposta.data.experiencias} />,
                },
                {
                    titulo:'Skills',
                    corpo: <Atributos atributos={resposta.data.atributos} />,
                },
                {
                    titulo:'Atividades Extras',
                    corpo:<Extras atividadesExtras={resposta.data.atividadesExtras} />,
                }])
                setCard(abas[0])
                setisLoading(false);
            })
    }, [isLoading]);

    if(isLoading) return <Spinner animation="border" />
    else return(
        <>
            <Card className='mb-2'>
                <Card.Header>
                    <Nav
                        fill 
                        variant="tabs" 
                        defaultActiveKey={0}
                        onSelect={(elementoSelecionado)=> setCard(abas[elementoSelecionado])}    
                    >
                        {abas?.map((aba, key)=> 
                                <Nav.Item key={key}>
                                    <Nav.Link eventKey={key}>
                                        {aba.titulo}
                                    </Nav.Link>
                                </Nav.Item>                            
                        )}
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Card.Title>
                        <h1>{card.titulo}</h1>
                    </Card.Title>

                    <Card.Text>
                        {card.corpo}
                    </Card.Text>
                </Card.Body>

            </Card>
            
            {/* <DropdownButton 
                variant='outline-secondary'
                as={ButtonGroup} 
                title="Baixar PDF" 
                id="bg-nested-dropdown"
            >
                <Dropdown.Item eventKey="1">English</Dropdown.Item>
                <Dropdown.Item eventKey="2">Portugês (BR)</Dropdown.Item>
            </DropdownButton> */}
        </>
    )
}

export default Curriculum;