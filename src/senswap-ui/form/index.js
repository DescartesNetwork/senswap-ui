import React, { useState } from 'react';
import PropType from 'prop-types';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';

import Grid from 'senswap-ui/grid';
import Avatar from 'senswap-ui/avatar';
import Typography from 'senswap-ui/typography';
import useStyle from './styles';


function Form(props) {
  const classes = useStyle();
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [inputFrom, setInputFrom] = useState(0);
  const [inputTo, setInputTo] = useState(0);

  const { amount, fromItems, toItems, onConnectWallet } = props;

  function handleFromSelect(e) {
    const data = e.target.value;
    setFromValue(data);
  }
  function handleToSelect(e) {
    const data = e.target.value;
    setToValue(data);
  }
  function handleConnectWallet() {
    const data = {
      amout: amount,
      from: fromValue.label,
      to: toValue.label,
      currency: inputFrom,
      toCurrency: inputTo,
    }
    return onConnectWallet(data);
  }
  
  function handleInputFrom(e) {
    const data = e.target.value;
    var result = 0;

    setInputFrom(data);

    if (toValue.rate) {
      result = Number(data)*Number(toValue.rate);
    }
    setInputTo(result);
  }

  var optionsFrom = fromItems.map((e, idx) => {
    return <MenuItem value={e} key={idx}><Avatar size="xsmall" src={e.src} />{e.label}</MenuItem>
  });

  var optionsTo = toItems.map((e, idx) => {
    return <MenuItem value={e} key={idx}><Avatar size="xsmall" src={e.src} />{e.label}</MenuItem>
  });

  var renderOption = (e) => {
    return <MenuItem className={classes.renderOption} spacing={2}><Avatar size="xsmall" src={e.src} />{e.label}</MenuItem>
  }

  return <Grid container spacing={0}>
    <Grid item xs={12} className={classes.form}>
      <Grid container className={classes.formFrom} spacing={0}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="body2">From</Typography>
        </Grid>
        <Grid item xs={12} className={classes.inputForm}>
          <Select
            variant="standard"
            value={fromValue}
            onChange={handleFromSelect}
            renderValue={value => {
              return renderOption(value)
            }}
          >
            {optionsFrom}
          </Select>
          <TextField placeholder="0" value={inputFrom} onChange={handleInputFrom} />
        </Grid>
        <Grid item xs={12} className={classes.amount}>
          <Typography variant="body2">Available: { amount }</Typography>
          <Typography variant="body2">Price: ${ fromValue.price }/{fromValue.label}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="body2">To</Typography>
        </Grid>
        <Grid item xs={12} className={classes.inputForm}>
          <Select
            variant="standard"
            value={toValue}
            onChange={handleToSelect}
            renderValue={value => {
              console.log(value, 'value');
              return renderOption(value)
            }}
          >
            {optionsTo}
          </Select>
          <TextField placeholder="0" disabled={true} value={inputTo}/>
        </Grid>
        <Grid item xs={12} className={classes.amount}>
          <Typography variant="body2">Available: { amount }</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item className={classes.button}>
          <Button variant="contained" color="primary" onClick={handleConnectWallet}>
            <Typography>Connect wallet</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

Form.propsType = {
  fromItems: PropType.array,
  to: PropType.array,
  onConnectWallet: PropType.func,
  amount: PropType.number,
}

Form.defaultProps = {
  fromItems: [
    {
      label: 'From 1',
      key: 'from_1',
      price: 1.555,
    },
    {
      label: 'From 2',
      key: 'from_2',
      price: 0.955,
    },
    {
      label: 'From 3',
      key: 'from_3',
      price: 4.555,
    },
  ],
  toItems: [
    {
      label: 'To 1',
      key: 'to_1',
      rate: 0.212
    },
    {
      label: 'To 2',
      key: 'to_2',
      rate: 0.421
    },
    {
      label: 'To 3',
      key: 'to_3',
      rate: 0.897
    },
  ],
  onConnectWallet: () => { },
  amount: 0,
}

export default Form;