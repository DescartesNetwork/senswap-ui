import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  carousel: {
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius * 2,
    '& ul': {
      padding: theme.spacing(0),
      margin: theme.spacing(0),
      listStyle: 'none',
      position: 'relative',
    },
    // Fix for jumping arrows
    '& .carousel-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    '& .carousel': {
      position: 'relative',
    },

    // Carousel slides
    '& .carousel-slide': {
      display: 'none',
      listStyleType: 'none',
      padding: `${theme.spacing(7) + 3}px ${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(4)}px`,
      '&.zoom': {
        display: 'block',
        position: 'absolute',
        opacity: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        borderRadius: theme.shape.borderRadius * 2,
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.complex,
        }),
        transform: 'scale(.7)',
        overflow: 'auto',
        zIndex: '-1',
      },
      '&.flash': {
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0,
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.complex,
        }),
        zIndex: '-1',
      },
      '&.fade': {
        display: 'block',
        position: 'absolute',
        top: 0,
        opacity: 0,
        borderRadius: theme.shape.borderRadius * 2,
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.complex,
        }),
        overflow: 'auto',
        zIndex: '-1',
        '&--next': {
          transform: 'translateX(-100%)',
        },
        '&--prev': {
          transform: 'translateX(100%)',
        },
      },
      '&-old': {
        '&--next': {
          transform: 'translateX(100%)',
        },
        '&--prev': {
          transform: 'translateX(-100%)',
        },
      },
      '&--active': {
        display: 'block',
        '&.zoom': {
          position: 'relative',
          opacity: 1,
          transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.complex,
          }),
          transform: 'scale(1)',
          zIndex: 1,
        },
        '&.flash': {
          position: 'relative',
          opacity: 1,
          transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.complex,
          }),
          zIndex: 1,
        },
        '&.fade': {
          position: 'relative',
          opacity: 1,
          transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.complex,
          }),
          zIndex: 1,
          '&--next, &--prev': {
            transform: 'translateX(0) !important',
          }
        }
      },
      '& .carousel-title,& .carousel-subtitle': {
        marginBottom: `${theme.spacing(2) - 4}px`,
      },
      '& .carousel-background': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        objectFit: 'cover',
        background: theme.palette.background.secondary,
        zIndex: '-1',
      }
    },
    // Carousel arrows
    '& .carousel-arrow': {
      position: 'absolute',
      top: '50%',
      display: 'block',
      color: theme.palette.text.primary,
      cursor: 'pointer',
      opacity: '.75',
      transform: 'translateY(-50%)',
      transition: theme.transitions.create(),

      '&:focus': {
        outline: '0',
      },

      '&:hover': {
        opacity: '.5',
      },

      '&--left': {
        left: '32px',
      },

      '&--right': {
        right: '32px',
      }
    },

    // Carousel indicators
    '& .carousel-indicators': {
      position: 'absolute',
      left: '32px',
      bottom: '32px',
      zIndex: 2,
      '& li': {
        '&:nth-of-type(n + 2)': {
          marginLeft: `${theme.spacing(0.5)}px`,
        }
      }
    },

    '& .carousel-indicator': {
      display: 'block',
      width: '24px',
      height: '3px',
      color: theme.palette.text.primary,
      background: theme.palette.background.secondaryLight,
      cursor: 'pointer',
      opacity: '.15',
      transition: theme.transitions.create(),

      '&:hover': {
        opacity: '.5',
      },

      '&--active': {
        '&, &:hover': {
          opacity: '.75',
        }
      }
    },
  }

}));