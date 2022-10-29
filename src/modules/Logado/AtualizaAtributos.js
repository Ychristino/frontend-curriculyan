// React Imports
import { useState, useEffect } from 'react';

// Modules Imports


// Bootstrap Imports
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//@Mui
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

//Service
import AtributoService from '../../services/AtributoService';

function AtualizaAtributos(){

    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    
    useEffect(()=> {
        new AtributoService().listarAtributos(1)
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
       <ListGroup as="ol">

        {data.map((atributo, key)=> 
            <ListGroup.Item
                key={key}
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                {(`${atributo.descricao}`).toUpperCase()}

                <ButtonGroup size="md" className="mb-2">
                    <Button variant="outline-secondary">
                        <DeleteIcon />
                    </Button>{' '}
                    <Button variant="outline-secondary">
                        <EditIcon />
                    </Button>
                </ButtonGroup>
            </ListGroup.Item>
        )}
        <ListGroup.Item
            as="li"
            className="justify-content-between align-items-start"
        >
            <InputGroup className="mb-2">
                <Form.Control
                    placeholder="Novo Atributo"
                    aria-label="Novo Atributo"
                />
                    <Button variant="outline-secondary" id="novoAtributo">
                        <AddIcon />
                    </Button>
                </InputGroup>
            </ListGroup.Item>
        </ListGroup>
    </>
    )
}
export default AtualizaAtributos;