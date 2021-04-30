import React from 'react';

import Link from 'senswap-ui/link';
import Typography from 'senswap-ui/typography';
import Grid from 'senswap-ui/grid';
import Button from 'senswap-ui/button';

import { ArrowBackIos, ArrowForwardIos, AccountBalanceWallet } from 'senswap-ui/icons';


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
  const { index, activeIndex, slide, onClick } = props;
  return <Grid
    container
    component="li"
    className={index === activeIndex ? "carousel-slide carousel-slide--active" : "carousel-slide"}
    spacing={0}
  >
    {slide.subtitle ? <Grid className="carousel-subtitle" item xs={12}>
      <Typography variant="subtitle1">{slide.subtitle}</Typography>
    </Grid> : null}
    <Grid className="carousel-title" item xs={12} md={6}>
      <Typography variant="h1">{slide.title}</Typography>
    </Grid>
    {slide.description ? <Grid className="carousel-description" item xs={12} md={6}>
      <Typography variant="body1">{slide.description}</Typography>
    </Grid> : null}
    {slide.button ? <Grid item>
      <Button
        className="carousel-button"
        variant="contained"
        color="primary"
        startIcon={<AccountBalanceWallet />}
        onClick={onClick}
      >
        <Typography variant="body2">{slide.button}</Typography>
      </Button>
    </Grid> : null}
    {slide.src ? <Grid item component="img" className="carousel-background" src={slide.src} />
      : <Grid item className="carousel-background" />}
  </Grid>
}