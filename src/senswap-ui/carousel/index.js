import React, { useState } from 'react';
import PropType from 'prop-types';

import Grid from 'senswap-ui/grid';
import { CarouselLeftArrow, CarouselSlide, CarouselRightArrow, CarouselIndicator } from 'senswap-ui/carousel/carousel';

import useStyles from './styles';

function Carousel(props) {
  const classes = useStyles();
  const { classes: userStyle, data, enableArrowButton, handleButtonClick, ...others } = props;
  const slidesLength = data.length;
  const [activeIndex, setActiveIndex] = useState(0);

  function goToSlide(index) {
    setActiveIndex(index);
  }

  function goToPrevSlide(e) {
    e.preventDefault();

    let index = activeIndex;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    setActiveIndex(index);
  }

  function goToNextSlide(e) {
    e.preventDefault();

    let index = activeIndex;
    let nextLength = slidesLength - 1;

    if (index === nextLength) {
      index = -1;
    }

    ++index;

    setActiveIndex(index);
  }

  function handleButton() {
    handleButtonClick();
  }

  return <Grid container spacing={0}>
    <Grid item {...others} className={classes.carousel} xs={12} sm={12} lg={12}>
      <Grid container className="carousel" spacing={0}>
        {enableArrowButton ?
          <CarouselLeftArrow onClick={(e) => goToPrevSlide(e)} />
          : null}
        <Grid className="carousel-slides" component="ul" item xs={12} sm={12} lg={12}>
          {data.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
              onButtonClick={handleButton}
            />
          )}
        </Grid>
        {enableArrowButton ?
          <CarouselRightArrow onClick={e => goToNextSlide(e)} />
          : null}
        {(data.length > 1) ?
          <Grid container item className="carousel-indicators" component="ul" xs={12} sm={12} lg={12} spacing={0}>
            {data.map((slide, index) =>
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={activeIndex}
                isActive={activeIndex === index}
                onClick={e => goToSlide(index)}
              />
            )}
          </Grid>
          : null}
      </Grid>
    </Grid>
  </Grid>
}

Carousel.propsType = {
  data: PropType.array,
  enableArrowButton: PropType.bool,
  handleButtonClick: PropType.func,
}
Carousel.defaultProps = {
  data: [],
  enableArrowButton: false,
  handleButtonClick: () => {},
}

export default Carousel;