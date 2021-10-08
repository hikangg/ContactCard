import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import UserAvatar from './UserAvatar';
import { CardActions, IconButton, Icon } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
});

function ContactCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea style={{display: "flex"}}>
                <CardHeader avatar={
                    <UserAvatar trust={props.trust}/>
                }>
                </CardHeader>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Nessuna connessione
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton style={{color: "#673ab7"}}>
                        <AddBoxOutlinedIcon style={{ fontSize: 60 }}/>
                    </IconButton>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default ContactCard;