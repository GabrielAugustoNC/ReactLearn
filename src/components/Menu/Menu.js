// /src/components/menu/Menu.js
import React from '../../../node_modules/react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import clsx from '../../../node_modules/clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreateIcon from '@material-ui/icons/Create';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import './Menu.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

var currentPage_selected = null;
setInterval(function () {
    let location = window.location.href;
    let origin = window.location.origin;
    let currentPage = location.substring(location.indexOf(origin) + origin.length).replace('/', '');
    let menuItens = ['home', 'formLogin', 'login', 'charts', 'dashboard'];

    if (currentPage_selected !== currentPage) {
        menuItens.forEach(item => {
            if ((currentPage.length === 0 && item === 'home') || currentPage === item) {
                document.getElementById(item).style.backgroundColor = '#d5deff';
            }
            else {
                document.getElementById(item).style.backgroundColor = '#fff';
            }
        });
    }
}, 100);

export default function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>

            <div className={classes.root}>
                <CssBaseline />

                <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Festval
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}>
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />

                    <List>
                        <Link className="app-menu__link" to="/">
                            <ListItem button key='home' id="home">
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <strong className="app-menu__link">Home</strong>
                            </ListItem>
                        </Link>

                        <Link className="app-menu__link" to="/formLogin">
                            <ListItem button key='formLogin' id="formLogin">
                                <ListItemIcon><CreateIcon /></ListItemIcon>
                                <strong className="app-menu__link">Novo Usuário</strong>
                            </ListItem>
                        </Link>

                        <Link className="app-menu__link" to="/login">
                            <ListItem button key='login' id="login">
                                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                                <strong className="app-menu__link">Login</strong>
                            </ListItem>
                        </Link>

                        <Link className="app-menu__link" to="/charts">
                            <ListItem button key='charts' id="charts">
                                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                                <strong className="app-menu__link">Gráficos</strong>
                            </ListItem>
                        </Link>

                        <Link className="app-menu__link" to="/dashboard">
                            <ListItem button key='dashboard' id="dashboard">
                                <ListItemIcon><DashboardIcon /></ListItemIcon>
                                <strong className="app-menu__link">Dashboard</strong>
                            </ListItem>
                        </Link>

                    </List>
                </Drawer>
            </div>
        </React.Fragment >
    );
}


    // return (<AppBar color="primary" position="static">


    //     <Toolbar color="primary">
    //         <img src={LogoImg} alt="" className="app-header__logo" />



    //         <div className="app-menu-group">
    //             <Link className="app-menu__link" to="/">
    //                 <Fab className="app-menu__button" variant="extended" size="medium">Home</Fab>
    //             </Link>
    //             <Link className="app-menu__link" to="/formLogin">
    //                 <Fab className="app-menu__button" variant="extended" size="medium">Novo Usuário</Fab>
    //             </Link>
    //             <Link className="app-menu__link" to="/login">
    //                 <Fab className="app-menu__button" variant="extended" size="medium">Login</Fab>
    //             </Link>
    //             <Link className="app-menu__link" to="/charts">
    //                 <Fab className="app-menu__button" variant="extended" size="medium">Gráficos</Fab>
    //             </Link>
    //             <Link className="app-menu__link" to="/dashboard">
    //                 <Fab className="app-menu__button" variant="extended" size="medium">Dashboard</Fab>
    //             </Link>
    //         </div>
    //     </Toolbar>
    // </AppBar>);