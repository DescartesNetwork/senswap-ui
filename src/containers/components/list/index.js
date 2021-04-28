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
// import ListItemHistory from 'senswap-ui/listItemHistory';

import { InboxRounded, DraftsRounded } from 'senswap-ui/icons';

import styles from './styles';


class ListComponent extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          variant: "withdraw",
          status: "Complete",
          date: 1588179600000,
          amount: 969.06654889,
          units: "USDT",
        },
        {
          id: 2,
          variant: "deposit",
          status: "Cancel",
          date: 1588266000000,
          amount: 0.206654889,
          units: "BTC",
        },
        {
          id: 3,
          variant: "deposit",
          status: "Complete",
          date: 1590426000000,
          amount: 0.531676712,
          units: "BTC",
        },
        {
          id: 4,
          variant: "withdraw",
          status: "Pending",
          date: 0,
          amount: 0.531676712,
          units: "BTC",
        }
      ],
    }
  }

  render() {
    // const { data } = this.state;

    return <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">List</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Simple list</Typography>
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

      {/* <Grid item xs={12}>
        <Typography variant="subtitle1">Latest activities</Typography>
        <List>
          {data.length > 5 ?
            data.slice(0, 5).map(value => <ListItemHistory key={value.id} {...value} />)
            : data.map(value => <ListItemHistory key={value.id} {...value} />)
          }
        </List>
      </Grid> */}

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