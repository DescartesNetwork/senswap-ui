import React, { useState } from 'react';
import PropType from 'prop-types';

import Grid from 'senswap-ui/grid';

import {
  CarouselLeftArrow, CarouselSlide, CarouselRightArrow,
  CarouselIndicator
} from './carousel';

import useStyles from './styles';


function Carousel(props) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, enableArrowButton, onClick } = props;

  function goToPrevSlide() {
    let index = activeIndex;
    if (index < 1) index = data.length;
    return setActiveIndex(--index);
  }

  function goToNextSlide() {
    let index = activeIndex;
    if (index === data.length - 1) index = -1;
    return setActiveIndex(++index);
  }

  return <Grid container spacing={0}>
    <Grid item className={classes.carousel} xs={12}>
      <Grid container className="carousel" spacing={0}>
        {enableArrowButton ? <CarouselLeftArrow onClick={goToPrevSlide} /> : null}
        <Grid item component="ul" xs={12} className="carousel-slides" >
          {data.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
              onClick={onClick}
            />
          )}
        </Grid>
        {enableArrowButton ? <CarouselRightArrow onClick={goToNextSlide} /> : null}
        {data.length > 1 ? <Grid item xs={12}>
          <Grid container className="carousel-indicators" component="ul">
            {data.map((_, index) => <CarouselIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              isActive={activeIndex === index}
              onClick={e => setActiveIndex(index)}
            />)}
          </Grid>
        </Grid> : null}
      </Grid>
    </Grid>
  </Grid>
}

Carousel.defaultProps = {
  data: [],
  enableArrowButton: false,
  onClick: () => { },
}

Carousel.propsType = {
  data: PropType.array,
  enableArrowButton: PropType.bool,
  onClick: PropType.func,
}

export default Carousel;