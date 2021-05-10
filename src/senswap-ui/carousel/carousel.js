import React, { Fragment } from 'react';

import Link from 'senswap-ui/link';
import Typography from 'senswap-ui/typography';
import Grid from 'senswap-ui/grid';
import Drain from 'senswap-ui/drain';

import { ArrowBackIos, ArrowForwardIos } from 'senswap-ui/icons';


export function CarouselLeftArrow(props) {
  const { onClick } = props;
  return <Link className="carousel-arrow carousel-arrow--left" onClick={onClick} >
    <ArrowBackIos />
  </Link>
}

export function CarouselRightArrow(props) {
  const { onClick } = props;
  return <Link className="carousel-arrow carousel-arrow--right" onClick={onClick} >
    <ArrowForwardIos />
  </Link>
}

export function CarouselIndicator(props) {
  const { index, activeIndex, onClick } = props;
  return <Grid component="li">
    <Link
      className={index === activeIndex
        ? "carousel-indicator carousel-indicator--active"
        : "carousel-indicator"
      }
      onClick={onClick}
    />
  </Grid>
}

export function CarouselSlide(props) {
  const { index, activeIndex, slide, oldIndex, animation } = props;
  return <Grid
    container
    component="li"
    className={(index === activeIndex ? 'carousel-slide carousel-slide--active' : "carousel-slide").concat(`${(index === oldIndex && animation === 'fade') ? ' carousel-slide-old' + (oldIndex < activeIndex ? '--prev' : '--next') : ''}`).concat(`${animation ? ' ' + animation + (animation === 'fade' ? (activeIndex < index ? ' fade--prev' : ' fade--next') : '') : ''}`)}
    spacing={0}
  >
    {slide.subtitle ? <Grid className="carousel-subtitle" item xs={12}>
      <Typography variant="subtitle1">{slide.subtitle}</Typography>
    </Grid> : null}
    <Grid className="carousel-title" item xs={12} md={8} lg={6} xl={4}>
      <Typography variant="h1">{slide.title}</Typography>
    </Grid>
    {slide.description ? <Grid item xs={12} md={8} lg={6} xl={4}>
      <Typography variant="body1">{slide.description}</Typography>
    </Grid> : null}
    {slide.action ? <Fragment>
      <Grid item xs={12}><Drain size={2} /></Grid>
      <Grid item xs={12}>{slide.action}</Grid>
      <Grid item xs={12}><Drain size={8} /></Grid>
    </Fragment> : <Grid item xs={12}>
      <Drain size={14} />
    </Grid>}
    {slide.src ? <Grid item component="img" className="carousel-background" src={slide.src} />
      : <Grid item className="carousel-background" />}
  </Grid>
}