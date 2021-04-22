import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Card from 'senswap-ui/card'

import styles from './styles'

class MuiCard extends Component {
    constructor() {
        super();
        this.state = {  
        }
    }
    render() {
        return <Grid container direction="column">
            <Typography variant="h4">Card</Typography>
            <Drain />
            <Grid>
                <Typography>Standard</Typography>
                <Drain size={2}/>
                <Card />
            </Grid>
        </Grid>
    }
}

const mapStateToProps = state => ({
    ui: state.ui,
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({
  }, dispatch);
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(MuiCard)));