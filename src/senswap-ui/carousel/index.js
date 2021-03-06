import React, { useCallback, useEffect, useState } from 'react';
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

  const { data, enableArrowButton, auto, durations: userDuration, animation, onClick } = props;

  const defaultDuration = useCallback(() => {
    let duration = null;
    if (typeof userDuration === 'number') duration = userDuration;
    else
      if (userDuration && userDuration.endsWith('ms')) duration = Number(userDuration.slice(0, userDuration.length - 2));
      else if (userDuration && userDuration.endsWith('s')) duration = Number(userDuration.slice(0, userDuration.length - 1)) * 1000;
      else duration = Number(userDuration) || null;
    if (duration && duration >= 500) return duration;
    else return 3000;
  }, [userDuration]);

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

  function goToSlide(index) {
    setOldIndex(activeIndex);
    return setActiveIndex(index);
  }

  useEffect(() => {
    let intervalId = null;
    if (auto) intervalId = setInterval(() => {
      let index = activeIndex;
      if (index === data.length - 1) index = -1;
      setActiveIndex(++index);
    }, defaultDuration());
    return () => {
      clearInterval(intervalId);
    }
  }, [activeIndex, auto, data.length, defaultDuration]);

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
              onClick={e => goToSlide(index)}
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
  duration: null,
  animation: ''
}

Carousel.propsType = {
  data: PropType.arrayOf(PropType.object),
  enableArrowButton: PropType.bool,
  onClick: PropType.func,
  auto: PropType.bool,
  duration: PropType.oneOfType([
    PropType.string,
    PropType.number
  ]),
  animation: PropType.string,
}

export default Carousel;