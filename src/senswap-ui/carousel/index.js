import React, { useEffect, useState } from 'react';
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
  const [oldIndex, setOldIndex] = useState(0);

  const { data, enableArrowButton,auto,duration,animation, onClick } = props;

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

  function goToSilde(index) {
    setOldIndex(activeIndex);
    return setActiveIndex(index);
  }

  useEffect(() => {
    let intervalId = null;
    if(auto) intervalId = setInterval(() => {
      let index = activeIndex;
      if (index === data.length - 1) index = -1;
      setActiveIndex(++index);
    }, duration);
    return () => {
      clearInterval(intervalId);
    }
  },[activeIndex, auto, data.length, duration]);

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
              oldIndex={oldIndex}
              slide={slide}
              animation={animation}
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
              onClick={e => goToSilde(index)}
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
  auto: false,
  duration: 3000,
  animation: ''
}

Carousel.propsType = {
  data: PropType.arrayOf(PropType.object),
  enableArrowButton: PropType.bool,
  onClick: PropType.func,
  auto: PropType.bool,
  duration: PropType.number,
  animation: PropType.string,
}

export default Carousel;