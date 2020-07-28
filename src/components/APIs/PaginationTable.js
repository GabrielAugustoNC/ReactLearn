import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const App = props => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Id</StyledTableCell>
                            <StyledTableCell align="center">Publicação</StyledTableCell>
                            <StyledTableCell align="justify">Nome</StyledTableCell>
                            <StyledTableCell align="justify">Email</StyledTableCell>
                            <StyledTableCell align="justify">Texto</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <StyledTableCell align="center" component="th" scope="row">{row.id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.postId}</StyledTableCell>
                                    <StyledTableCell align="justify">{row.name}</StyledTableCell>
                                    <StyledTableCell align="justify">{row.email}</StyledTableCell>
                                    <StyledTableCell align="justify">{row.body}</StyledTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.items.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                labelRowsPerPage="Itens por Página"
                nextIconButtonText="Próximo"
                backIconButtonText="Anterior"
            />
        </Paper>
    );
};

export default App;