// REACT IMPORTS
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//MODULES IMPORTS
import Menu from './modules/Menu';
import Projetos from './modules/Projetos/Projetos';
import Curriculum from './modules/Curriculum/Curriculum';
import Manutencao from './modules/Logado/Manutencao';
import Login from './modules/Logado/Login';

// BOOTSTRAP IMPORTS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AtualizaCurriculo from './modules/Logado/AtualizaCurriculo';
import AtualizaAtributos from './modules/Logado/AtualizaAtributos';
import AtualizaExperiencia from './modules/Logado/AtualizaExperiencia';
import AtualizaFormacao from './modules/Logado/AtualizaFormacao';

function App() {
  return (
    <>
      {/* Barra de navegação */}
        <Menu />

        {/* Inicio Bloco Central */}
        
        {/* <Manutencao /> */}

        <Row
          className='mb-2'
          lg={3} 
          md={1}
        >
            {/* Inicio Conteúdo da página */}
            <Col lg={{span:8, offset: 2}} md={12}>
              <Login />
              {/* <AtualizaAtributos /> */}
              {/* <AtualizaCurriculo /> */}
              {/* <AtualizaExperiencia /> */}
              {/* <AtualizaFormacao /> */}
              
              <BrowserRouter>
                <Routes>
                  <Route 
                    exact
                    path='/' 
                    element={""} 
                  />

                  <Route 
                    exact
                    path='/curriculo' 
                    element={<Curriculum />} 
                  />

                  <Route 
                    path='/projetos' 
                    element={<Projetos />} 
                  />

                  <Route 
                    path='/in' 
                    element={<Login />} 
                  />

                  <Route 
                    path='*' 
                    element={<h1>Page not found</h1>} 
                  />

                </Routes>
              </BrowserRouter>
            </Col>
            {/* Final Conteúdo da página */}

          </Row>
          {/* Final Bloco Central */}

  </>
  );
}

export default App;
