import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 10,
    marginBottom: 10,
  },
  clickableTitle: {
    cursor: 'pointer',
  },
  content: {
    marginTop: 5,
    '@global': {
      p: {
        fontFamily: 'Segoe UI',
      },
      img: {
        maxWidth: '100%',
      },
      code: {
        whiteSpace: 'pre-wrap',
      },
    },
  },
  footer: {
    marginTop: 5,
  },
  chip: {
    cursor: 'pointer',
    margin: '0 2px',
  },
});

export default useStyles;
