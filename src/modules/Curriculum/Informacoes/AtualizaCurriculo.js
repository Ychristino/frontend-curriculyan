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


function AtualizaCurriculo(){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [card, setCard] = useState({});
    //VERIFICAR, ARRUMAR PARA BUSCAR DA API OU MELHORAR A CONSTRUÇÃO 
    const [abas, setAbas] = useState([{}]);
    
    useEffect(()=> {
        axios.get("http://localhost:8080/curriculo/PT_BR")
            .then(resposta => {
                setData(resposta.data);
                setisLoading(false);
            })
    }, [isLoading]);


}
export default AtualizaCurriculo