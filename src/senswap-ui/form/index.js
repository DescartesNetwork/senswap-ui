import React, { useState } from 'react';
import PropType from 'prop-types';
import { TextField,Select,MenuItem, InputLabel } from '@material-ui/core';

import Grid from 'senswap-ui/grid';
import Avatar from 'senswap-ui/avatar';
import Typography from 'senswap-ui/typography';


function Form(props) {
  const [fromValue, setFromValue] = useState('');
  const selects = [
    {
      label: 'Slect 1',
      key: 'select 1',
    },
    {
      label: 'Slect 2',
      key: 'select 2',
    },
    {
      label: 'Slect 3',
      key: 'select 3',
    },
  ];
  function handleFromSelect(e) {
    setFromValue(e.target.value);
    console.log(e.target.value, fromValue);
  }

  var options = selects.map((e,idx) => {
    return <MenuItem value={e.label} key={idx}><Avatar size="xsmall" />{e.label}</MenuItem>
  });

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Select variant="standard" value={fromValue} onChange={ handleFromSelect }>
        {options}
      </Select>
      <TextField />
    </Grid>
  </Grid>
}

export default Form;