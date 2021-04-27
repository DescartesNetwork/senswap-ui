import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Link from 'senswap-ui/link';
import List, { ListItem, ListItemIcon, ListItemText } from 'senswap-ui/list';

import { InboxRounded, DraftsRounded } from 'senswap-ui/icons';

import styles from './styles';


class ListComponent extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">List</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxRounded />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsRounded />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">References</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link href="https://material-ui.com/components/lists/">Material UI Lists System</Link>
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
)(withStyles(styles)(ListComponent)));