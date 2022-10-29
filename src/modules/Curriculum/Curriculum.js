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
import Spinner from 'react-bootstrap/Spinner';

//Service
import CurriculoService from '../../services/CurriculoService'

function Curriculum(){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [card, setCard] = useState({});
    
    //VERIFICAR, ARRUMAR PARA BUSCAR DA API OU MELHORAR A CONSTRUÇÃO 
    const [abas, setAbas] = useState([{}]);
    
    useEffect(()=> {
        new CurriculoService().listarCurriculo(1)
        .then(resposta=> {
            setData(resposta)
            setAbas([{
                titulo:'Atividades Atuais',
                corpo:<Atividades atividadesAtuais={resposta.atividadesAtuais} />,
            },
            {
                titulo:'Formações',
                corpo:<Formacoes curriculoId={resposta.id} />,
            },
            {
                titulo:'Experiências',
                corpo:<Experiencias curriculoId={resposta.id} />,
            },
            {
                titulo:'Skills',
                corpo: <Atributos curriculoId={resposta.id} />,
            },
            {
                titulo:'Atividades Extras',
                corpo:<Extras atividadesExtras={resposta.atividadesExtras} />,
            }])
            setCard(abas[0])
            setisLoading(false);
        })
    }, [isLoading]);

    if (isLoading)return (
        <>
            <Spinner animation="grow" />
        </>) 
    
    return(
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

                    <Card.Text as='div'>
                        {card.corpo}
                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    )
}

export default Curriculum;