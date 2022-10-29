function experienciaForm(){
    return(
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
                <Form.Group className="mb-3" controlId="empregador">
                    <Form.Label><h3>Empregador</h3></Form.Label>
                    <Form.Control type="text" placeholder="Empregador" size='md' />
                </Form.Group>
            </Col>

            <Col md={12}>
                <Form.Group className="mb-3" controlId="cargo">
                    <Form.Label><h3>Cargo</h3></Form.Label>
                    <Form.Control type="text" placeholder="Cargo" size='md' />
                </Form.Group>
            </Col>


            <Form.Group className="mb-3" controlId="descricao">
                <Form.Label><h3>Descrição das atividades</h3></Form.Label>
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