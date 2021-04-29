import React, { Component } from 'react';
import { ArrowBackIos, ArrowForwardIos, AccountBalanceWallet } from '@material-ui/icons';

import Link from 'senswap-ui/link';
import Typography from 'senswap-ui/typography';
import Grid from 'senswap-ui/grid';
import Button from 'senswap-ui/button';

export class CarouselLeftArrow extends Component {
  render() {
    return (
      <Link
        className="carousel-arrow carousel-arrow--left"
        onClick={this.props.onClick}
      >
        <ArrowBackIos />
      </Link>
    );
  }
}

export class CarouselRightArrow extends Component {
  render() {
    return (
      <Link
        className="carousel-arrow carousel-arrow--right"
        onClick={this.props.onClick}
      >
        <ArrowForwardIos />
      </Link>
    );
  }
}

export class CarouselIndicator extends Component {
  render() {
    return (
      <Grid component="li">
        <Link
          className={
            this.props.index === this.props.activeIndex
              ? "carousel-indicator carousel-indicator--active"
              : "carousel-indicator"
          }
          onClick={this.props.onClick}
        />
      </Grid>
    );
  }
}

export class CarouselSlide extends Component {
  render() {
    return (
      <Grid
        component="li"
        className={
          this.props.index === this.props.activeIndex
            ? "carousel-slide carousel-slide--active"
            : "carousel-slide"
        }
        container
        spacing={0}
      >
        {this.props.slide.subtitle ?
          <Grid className="carousel-subtitle" item xs={12}>
            <Typography variant="subtitle1">{this.props.slide.subtitle}</Typography>
          </Grid>
          : null}
        <Grid className="carousel-title" item xs={12} md={6}>
          <Typography variant="h1">{this.props.slide.title}</Typography>
        </Grid>
        {this.props.slide.description ?
          <Grid className="carousel-description" item xs={12} md={6}>
            <Typography variant="body1">{this.props.slide.description}</Typography>
          </Grid>
          : null}
        {this.props.slide.button ?
          <Grid item>
            <Button
              className="carousel-button"
              variant="contained"
              color="primary"
              startIcon={<AccountBalanceWallet />}
              onClick={this.props.onButtonClick}
            >
              <Typography variant="body2">{this.props.slide.button}</Typography>
            </Button>
          </Grid>
          : null}
        {this.props.slide.src ?
          <Grid item component="img" className="carousel-background" src={this.props.slide.src} />
          :
          <Grid item className="carousel-background" />
        }
      </Grid>
    );
  }
}