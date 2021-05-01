import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import TextField from 'senswap-ui/textField';
import Button, { IconButton } from 'senswap-ui/button';
import Divider from 'senswap-ui/divider';

import { SendRounded, ArrowDropDownRounded } from 'senswap-ui/icons';

import styles from './styles';


class TextFieldComponent extends Component {

  render() {
    const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Text Field</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          variant="contained"
          label="Contained text field"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          variant="contained"
          label="Contained text field with helper text"
          helperText="Helper text"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          variant="contained"
          label="Contained text field with oth primary & secondary help text"
          helperTextPrimary="Primary helper text"
          helperTextSecondary="Secondary helper text"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          variant="contained"
          label="Contained text field with error"
          error="Error"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          variant="contained"
          label="Contained text field with adorments"
          InputProps={{
            startAdornment: <Grid container>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  endIcon={<ArrowDropDownRounded />}
                  className={classes.button}
                >
                  <Typography>Select</Typography>
                </Button>
              </Grid>
              <Grid item style={{ paddingLeft: 0 }}>
                <Divider orientation="vertical" />
              </Grid>
            </Grid>,
            endAdornment: <IconButton size="small">
              <SendRounded />
            </IconButton>
          }}
        />
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
)(withStyles(styles)(TextFieldComponent)));