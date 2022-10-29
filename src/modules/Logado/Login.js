// React Imports
import { useState, useEffect } from 'react';

// Modules Imports

// Bootstrap Imports
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

//Api
import LoginService from '../../services/Logar';

function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = ()=> new LoginService().logar(email, senha)
        .then(resposta=> {
           console.log(resposta)
        })

    return(
        <Row className="align-middle">
            <Col md={{span:12, offset:1}}>
                <Form onSubmit={logar}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control 
                                type='email'
                                placeholder="email@example.com"
                                onChange={e=> setEmail(e.target.value)}
                                />
                        </Col>
                    </Form.Group>
        
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                onChange={e=> setSenha(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Row>
                        <Col md={{span:6, offset:2}} className="d-grid gap-2">
                            <Button onClick={logar} variant="secondary">Login</Button>
                        </Col>
                    </Row>
            </Form>
        </Col>
      </Row>

)
}
export default Login