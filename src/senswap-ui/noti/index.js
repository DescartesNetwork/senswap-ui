import React from 'react';
import PropType from 'prop-types';

import Grid from 'senswap-ui/grid';
import Dialog, { DialogActions, DialogContentText, DialogContent, DialogTitle } from 'senswap-ui/dialog';
import { Close } from 'senswap-ui/icons';
import Button from 'senswap-ui/button';

import useStyle from './styles';
import Typography from 'senswap-ui/typography';

const Noti = (props) => {
  const classes = useStyle();
  const { status, classes: userClass, message, src, onClose, ...others } = props;
  const combinedClasses = {
    paper: classes.paper, ...(userClass || {})
  };

  return <Grid container spacing={0}>
    <Grid item xs={12}>
      <Dialog classes={combinedClasses} {...others}>
        <DialogActions className={classes.spacing}>
          <Button onClick={onClose} className="close"><Close /></Button>
        </DialogActions>
        <DialogContent className={classes.spacing}>
          <Grid component="img" src={src} className="img" />
          <DialogTitle align="center" className="status">{status}</DialogTitle>
          <DialogContentText align="center" className="message">{message}</DialogContentText>
        </DialogContent>
        <DialogActions className={classes.spacing}>
          {(status.toLowerCase() === 'warning') ? <Button className="submit" variant="outlined" onClick={() => console.log('cancel')}>
            <Typography variant="body1">Cancel</Typography>
          </Button> : null}
          <Button className="submit" variant="contained" color="primary" onClick={() => console.log('OK')}>
            <Typography variant="body1">Ok</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  </Grid>
}

Noti.propsType = {
  status: PropType.string,
  message: PropType.string,
  src: PropType.string,
  onClose: PropType.func,
}
Noti.defaultProps = {
  status: '',
  message: '',
  src: '',
  onClose: () => { }

}

export default Noti;