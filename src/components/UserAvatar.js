import React from "react";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    avatar: {
      width: '100px',
      height: '100px',
      position: 'absolute'
    },
    avatarBadge: {
        position: 'relative', 
        top: '20px', 
        zIndex: '1'
    }, 
    avatarBody: {
        position: 'relative', 
        width: '100px', 
        height: '140px'
    },
    purple: {
        color: 'white',
        backgroundColor: '#673ab7',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
}));

function UserAvatar(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.avatarBadge}>
                <Avatar className={classes.purple}>{props.trust}</Avatar>
            </div>
            <div className={classes.avatarBody}>
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/55.jpg" className={classes.avatar} />
                <div style={{position: 'absolute'}}>
                    <CircularProgressbar
                    value={props.trust}
                    textForPercentage={null}
                    styles={buildStyles({                    
                        // Colors
                        trailColor: '#d6d6d6',
                        pathColor: `rgba(103, 58, 183, ${70 / 100})`,
                      })}
                    />
                </div>
            </div>
        </>
    );
}

export default UserAvatar;