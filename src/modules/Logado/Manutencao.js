// React Imports
import React from 'react';

// Modules Imports

// Bootstrap Imports

// @MUI
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import ArticleIcon from '@mui/icons-material/Article';
import BuildIcon from '@mui/icons-material/Build';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Fab } from '@mui/material';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function Manutencao(){
    const menus = [
        { icone: <ArticleIcon />, nome: 'Curriculo', link: '../curriculo/edit' },
        { icone: <BuildIcon />, nome: 'Projetos', link: '../projetos/edit' },
        { icone: <ContactsIcon />, nome: 'Informações', link: '../informacoes/edit'},
    ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
                <SpeedDial
                    ariaLabel="Edição"
                    sx={{ 
                        position: 'absolute', 
                        bottom: 16, 
                        right: 16,
                    }}
                    FabProps={
                        {
                            color:'string',
                        }
                    }
                    icon={<EditIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {menus.map((item, key) => (
                            <SpeedDialAction
                                FabProps={
                                    {
                                        href:item.link,
                                    }
                                }
                                key={key}
                                icon={item.icone}
                                tooltipTitle={item.nome}
                                tooltipOpen
                                onClick={handleClose}
                            />
                        )
                    )}
                </SpeedDial>
        </>
    )
}
export default Manutencao;