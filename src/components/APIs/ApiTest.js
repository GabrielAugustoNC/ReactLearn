import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import PaginationComponents from './PaginationTable';

var state = {
    error: null,
    isLoaded: false,
    items: []
};

class TableApi extends React.Component {
    constructor() {
        super();
        this.state = { postId: ""};

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({ postId: event.target.value });
        this.componentDidMount();
    };

    forceUpdateHandler() {
        this.forceUpdate();
    };

    componentDidMount() {
        this.timeout = setTimeout(() => {
            state.isLoaded = false;
            var url = "https://jsonplaceholder.typicode.com/comments";

            if(this.state.postId.length > 0)
               url += "?postId=" + this.state.postId;
            
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        state = {
                            error: null,
                            isLoaded: true,
                            items: result
                        };

                        this.forceUpdateHandler();
                    },
                    (error) => {
                        state = {
                            error: error,
                            isLoaded: true,
                            items: []
                        };
                    }
                )
        }, 300);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { error, isLoaded, items } = state;
        const classes = makeStyles((theme) => ({
            root: {
                maxWidth: 345,
                margin: "1em",
                float: "left"
            },
            backdrop: {
                zIndex: theme.zIndex.drawer + 1,
                color: '#fff',
            },
        }));


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <Backdrop className={classes.backdrop} open={!isLoaded}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
        } else {
            return (
                <React.Fragment>
                    <form noValidate autoComplete="off">
                        <TextField label="N° do Post" variant="outlined" value={this.state.value} onChange={this.handleChange} />
                    </form>

                    <br />
                    <PaginationComponents items={items} />
                </React.Fragment>
            );
        }
    }

}

export default TableApi;