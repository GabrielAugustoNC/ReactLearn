import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageIcon from '@material-ui/icons/Check';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class ApiTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: { message: "Houve um erro!" }
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;

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
                <Container maxWidth="md">
                    {items.map(item => (
                        <Container maxWidth="md">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Testes GET"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.email}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <ImageIcon /> Marcar como lido
                                </Button>
                                </CardActions>
                            </Card>
                            <Divider variant="fullWidth" component="br" />
                        </Container>
                    ))}
                </Container>
            );
        }
    }
}