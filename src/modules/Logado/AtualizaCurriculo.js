// React Imports
import { useState, useEffect } from 'react';

// Modules Imports

// Bootstrap Imports
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

//Service
import CurriculoService from '../../services/CurriculoService';

function AtualizaCurriculo(){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    
    useEffect(()=> {
        new CurriculoService().listarCurriculo(1)
            .then(resposta => {
                console.log(resposta)
                setData(resposta);
                setisLoading(false);
            })
    }, [isLoading]);

    if (isLoading)return (
        <>
            <Spinner animation="grow" />
        </>)
    return(
        <Form>
            <Form.Group className="mb-3" controlId="AtividadesAtuais">
                <Form.Label><h3>Atividades Atuais</h3></Form.Label>
                <Form.Control as="textarea" rows={10} 
                    defaultValue={data.atividadesAtuais}/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="AtividadesExtras">
                <Form.Label><h3>Atividades Extras</h3></Form.Label>
                <Form.Control as="textarea" rows={10} 
                defaultValue={data.atividadesExtras} />
            </Form.Group>
            <Row>
                <Col md={12} className="d-grid gap-2">
                    <Button variant="outline-success">Salvar</Button>
                    <Button variant="outline-danger">Cancelar</Button>
                </Col>
            </Row>
      </Form>
    )


}
export default AtualizaCurriculo