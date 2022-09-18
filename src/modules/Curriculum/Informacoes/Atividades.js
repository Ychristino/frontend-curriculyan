// React Imports
import React from 'react';
import { useState, useEffect } from 'react';

// Modules Imports

// Bootstrap Imports

function Atividades(props){

    console.log(props.atividadesAtuais)
    
    return(
        <>
            {props.atividadesAtuais}
        </>
    )
}
export default Atividades;