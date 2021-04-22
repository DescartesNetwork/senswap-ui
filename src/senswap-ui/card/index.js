import React from 'react';
import Proptype from 'prop-types';
import MuiCard from '@material-ui/core/Card'

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import useStyles from './styles';

function Card(props) {
    const classes = useStyles();
    return <Grid container spacing={2}>
        <Grid className={classes.card}>
            <MuiCard>
                <Typography>Card header</Typography>
            </MuiCard>
        </Grid>
    </Grid>
}


export default Card;