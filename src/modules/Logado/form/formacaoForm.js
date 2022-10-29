// React Imports
import React from 'react';


// Modules Imports
// Bootstrap Imports

//Filtros/Displays

//Api
import apiCurriculo from '../../../api/ApiCurriculo';

function formacaoForm(){
    return(
        <>
        <Form>
            <Row>
                <Col md={12} lg={6}>
                    <Form.Group className="mb-3" controlId="dataInicio">
                        <Form.Label><h3>Data Inicial</h3></Form.Label>
                        <Form.Control type="date" size='md'
                            onChange={e=> console.log(e.target.value)} />
                    </Form.Group>
                </Col>
                
                <Col md={12} lg={6}>
                    <Form.Group className="mb-3" controlId="dataFim">
                        <Form.Label><h3>Data Final</h3></Form.Label>
                        <Form.Control type="date" size='md'
                            onChange={e=> console.log(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            
        <Col md={12}>
            <Form.Group className="mb-3" controlId="Instituicao">
                <Form.Label><h3>Instituição</h3></Form.Label>
                <Form.Control type="text" placeholder="Instituição" size='md' />
            </Form.Group>
        </Col>

        <Col md={12}>
            <Form.Group className="mb-3" controlId="Formacao">
                <Form.Label><h3>Formação</h3></Form.Label>
                <Form.Control type="text" placeholder="Formação" size='md' />
            </Form.Group>
        </Col>


        <Row>
            <Col md={12} className="d-grid gap-2">
                <Button variant="outline-success">Salvar</Button>
                <Button variant="outline-danger">Cancelar</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}
export default formacaoForm;
