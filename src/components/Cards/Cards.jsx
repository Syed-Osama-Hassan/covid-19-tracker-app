import React from 'react'
import styles from './Cards.module.css';
import {Card, Grid, CardContent, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    infected: {
      borderBottom: `10px solid rgba(0, 0, 250, 0.5)`,
      margin: `0 2% !important`,
    },
    recovered: {
        borderBottom: `10px solid rgba(0, 250, 0, 0.5)`,
        margin: `0 2% !important`,
    },
    deaths: {
        borderBottom: `10px solid rgba(250, 0, 0, 0.5)`,
        margin: `0 2% !important`,
    },
    
  });

const Cards = ({data : {confirmed, recovered, deaths}}) => {
    const classes = useStyles();

    if(!confirmed){
        return "Loading...";
    }
    
    return (
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={classes.infected}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Infected
                    </Typography>
                    <Typography variant="h5">
                    {confirmed.value}
                    </Typography>
                    <Typography variant="body2">
                    Number of active cases of COVID-19
                    
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classes.recovered}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Recovered
                    </Typography>
                    <Typography variant="h5">
                    {recovered.value}
                    </Typography>
                    <Typography variant="body2">
                    Number of recovered cases of COVID-19
                    
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classes.deaths}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Deaths
                    </Typography>
                    <Typography variant="h5">
                    {deaths.value}
                    </Typography>
                    <Typography variant="body2">
                    Number of deaths from COVID-19
                    
                    </Typography>
                    </CardContent>
                </Grid>
            </Grid>
       </div>
    )
}

export default Cards;