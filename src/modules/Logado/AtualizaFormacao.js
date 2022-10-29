// React Imports
import { useState, useEffect } from 'react';

// Modules Imports

// Bootstrap Imports
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner';

//@Mui
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

//Filtros/Displays
import MostraData from '../../Filtros/MostraData';

//Service
import FormacaoService from '../../services/FormacaoService';

function AtualizaFormacao(){


    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [paginas, setPaginas] = useState(2);
    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();

    useEffect(()=> {
        new FormacaoService().listarFormacao(1)
            .then(resposta => {
                console.log(resposta)
                setData(resposta.data.content);
                setPaginas(resposta.data.pageable.totalPages)
                setisLoading(false);
            })
    }, [isLoading]);
    
    if (isLoading)return (
        <>
            <Spinner animation="grow" />
        </>) 
    return(
        <>
        <ListGroup as="ol">

            {data.map((formacao, key)=> 
                <ListGroup.Item
                    key={key}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{(`${formacao.curso} - ${formacao.instituicao}`).toUpperCase()}</div>
                        {MostraData(formacao.data)}
                    </div>
                    <ButtonGroup size="md" className="mb-2">
                    <Button variant="outline-secondary" href="wa">
                        <DeleteIcon />
                    </Button>{' '}
                    <Button variant="outline-secondary" href="wa">
                        <EditIcon />
                    </Button>
                </ButtonGroup>
            </ListGroup.Item>
        )}
    </ListGroup>
    
    <Fab 
        color="success"
        aria-label="add" 
        variant='extended'
        sx={{
            position: 'absolute',
            bottom: 16,
            right: 16
        }}
        >Novo
        <AddIcon />
    </Fab>
        </>
    )
}
export default AtualizaFormacao;
