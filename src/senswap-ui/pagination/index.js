import React from 'react';
import { usePagination } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { Check } from '@material-ui/icons';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import useStyles from './styles';
import Button from 'senswap-ui/button';

function CusPagination(props) {
  const classes = useStyles();
  const { count,page, onChangePagination } = props;
  const { items } = usePagination({
    count: count,
    page: page,
  });

  const dots = <Typography className="dots">…</Typography>;
  const btnNext = <Grid container direction="row"><Typography>Next</Typography><Check /></Grid>;
  const btnPrevious = <Typography>Previous</Typography>;

  const changePagination = (value) => {
    const pages = value;
    return onChangePagination(pages);
  };

  return <Grid container spacing={0}>
    <Grid item xs={12} md={12}>
      <Grid component="nav" className={classes.pagination}>
        <Grid component="ul">
          {items.map(({ page, type, selected, disabled, onChange, ...item }, index) => {
            let children = null;
            item.onClick = () => { 
              changePagination(page)
            }
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = dots;
            } else if (type === 'page') {
              children = (
                <Button color="primary" className={selected ? 'selected' : ''} {...item}>
                  {page}
                </Button>
              );
            } else {
              children = (
                <Button className={disabled ? 'btn-control disabled' : 'btn-control'} {...item}>
                  {type === 'next' ? btnNext : btnPrevious}
                </Button>
              );
            }

            return <Grid component="li" key={index}>{children}</Grid>;
          })}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}
CusPagination.defaultProps = {
  count: 0,
  page: 1,
  size: 'small',
  isShow: false,
  shape: 'round',
  onChangePagination: (e) => { },
}
CusPagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  size: PropTypes.string,
  isShow: PropTypes.bool,
  shape: PropTypes.string,
  onChangePagination: PropTypes.func,
}
export default CusPagination;