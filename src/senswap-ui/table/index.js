import React, { forwardRef } from 'react';

import MuiTable from '@material-ui/core/Table';
import MuiTableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableContainer from '@material-ui/core/TableContainer';
import MuiTableHead from '@material-ui/core/TableHead';
import MuiTableRow from '@material-ui/core/TableRow';

import useStyles from './styles';


const Table = forwardRef((props, ref) => {
  const classes = useStyles();
  const { classes: userClasses, ...others } = props;
  const defaultClasses = { root: classes.table }
  const combinedClasses = { ...defaultClasses, ...userClasses }

  return <MuiTable classes={combinedClasses} {...others} ref={ref} />
});

export default Table;

export const TableBody = forwardRef((props, ref) => {
  return <MuiTableBody {...props} ref={ref} />
});

export const TableCell = forwardRef((props, ref) => {
  const classes = useStyles();
  const { classes: userClasses, ...others } = props;
  const defaultClasses = { root: classes.cell, head: classes.cellHead }
  const combinedClasses = { ...defaultClasses, ...userClasses }

  return <MuiTableCell classes={combinedClasses} {...others} ref={ref} />
});

export const TableContainer = forwardRef((props, ref) => {
  return <MuiTableContainer {...props} ref={ref} />
});

export const TableHead = forwardRef((props, ref) => {
  return <MuiTableHead {...props} ref={ref} />
});

export const TableRow = forwardRef((props, ref) => {
  const classes = useStyles();
  const { classes: userClasses, ...others } = props;
  const defaultClasses = { root: classes.row }
  const combinedClasses = { ...defaultClasses, ...userClasses }

  return <MuiTableRow classes={combinedClasses} {...others} ref={ref} />
});