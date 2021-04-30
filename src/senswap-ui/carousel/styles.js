import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  carousel: {
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius * 2,
    '& ul': {
      padding: theme.spacing(0),
      margin: theme.spacing(0),
      listStyle: 'none',
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
      position: 'relative',

      '&--active': {
        display: 'block',
      },
      '& .carousel-title,& .carousel-subtitle': {
        marginBottom: `${theme.spacing(2) - 4}px`,
      },
      '& .carousel-description': {
        marginBottom: `${theme.spacing(15) - 5}px`,
      },
      '& .carousel-button': {
        marginTop: `${theme.spacing(3) - 4}px`,
        padding: `${theme.spacing(2) - 4}px`,
        borderRadius: `${theme.spacing(2) - 4}px`
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