import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Button from 'senswap-ui/button';
import { usePagination } from '@material-ui/lab';

import { ArrowBackRounded, ArrowForwardRounded } from 'senswap-ui/icons';

import useStyles from './styles';


function Pagination(props) {
  const classes = useStyles();
  let { count, page, onChange } = props;
  const { items } = usePagination({
    count,
    page: page + 1,
    boundaryCount: 1,
    siblingCount: 0
  });


  return <Grid container spacing={0}>
    <Grid item xs={12} md={12}>
      <Grid component="nav" className={classes.pagination}>
        <Grid component="ul">
          {items.map(({ page, type, selected, ...others }, index) => {
            others.onClick = () => onChange(page - 1); // Including page 0

            if (type === 'start-ellipsis' || type === 'end-ellipsis')
              return <Grid component="li" key={index}>
                <Typography className="dots">…</Typography>
              </Grid>

            if (type === 'page') return <Grid component="li" key={index}>
              <Button
                variant={selected ? 'contained' : 'outlined'}
                color={selected ? 'primary' : 'default'}
                classes={{ root: classes.button }}
                {...others}
              >
                <Typography>{page}</Typography>
              </Button>
            </Grid>

            return <Grid component="li" key={index}>
              <Button
                variant="outlined"
                classes={{ root: classes.button }}
                {...others}
              >
                {type === 'next' ? <ArrowForwardRounded /> : <ArrowBackRounded />}
              </Button>
            </Grid>
          })}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

Pagination.defaultProps = {
  count: 0,
  page: 1,
  onChange: () => { },
}

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
}
export default Pagination;