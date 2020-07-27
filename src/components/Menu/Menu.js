// /src/components/menu/Menu.js
import React from '../../../node_modules/react'
import { Link } from '../../../node_modules/react-router-dom'
import { makeStyles } from '../../../node_modules/@material-ui/core/styles';
import AppBar from '../../../node_modules/@material-ui/core/AppBar';
import Toolbar from '../../../node_modules/@material-ui/core/Toolbar';
import Fab from '../../../node_modules/@material-ui/core/Fab';
import LogoImg from '../../images/festval_logo.png';

import './Menu.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Menu = () => (
    <AppBar color="default" position="static">
        <Toolbar color="default">
            <img src={LogoImg} className="app-header__logo" />

            <div className="app-menu-group">
                <Link className="app-menu__link" to="/">
                    <Fab className="app-menu__button" variant="extended" size="medium">Home</Fab>
                </Link>
                <Link className="app-menu__link" to="/formLogin">
                    <Fab className="app-menu__button" variant="extended" size="medium">Novo Usuário</Fab>
                </Link>
                <Link className="app-menu__link" to="/login">
                    <Fab className="app-menu__button" variant="extended" size="medium">Login</Fab>
                </Link>
                <Link className="app-menu__link" to="/about">
                    <Fab className="app-menu__button" variant="extended" size="medium">Gráficos</Fab>
                </Link>
                <Link className="app-menu__link" to="/dashboard">
                    <Fab className="app-menu__button" variant="extended" size="medium">Dashboard</Fab>
                </Link>
            </div>
        </Toolbar>
    </AppBar>
)

export default Menu