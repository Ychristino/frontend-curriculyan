// React Imports
import { useState, useEffect } from 'react';

// Modules Imports


// Bootstrap Imports

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