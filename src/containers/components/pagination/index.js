import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Pagina from 'senswap-ui/pagination';

import styles from './styles';

class Pagination extends Component {
    constructor() {
        super();
        this.state = {
            page: 3,
            count: 8,
            isShow: false,
            size: 'medium',
        }
    }
    onChangePagination = (val) => {
        this.setState({
            page: val
        });
    }
    render() {
        const { page, count, isShow, size, shape } = this.state;
        return <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">Pagination</Typography>
            </Grid>
            <Drain />
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Standard</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Pagina
                            page={page}
                            count={count}
                            isShow={isShow}
                            size={size}
                            shape={shape}
                            onChangePagination={this.onChangePagination}
                        />
                    </Grid>
                </Grid>
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
)(withStyles(styles)(Pagination)));