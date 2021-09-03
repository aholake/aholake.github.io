import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 96,
  },
  content: {
    borderTop: '1px solid #FFF',
    paddingTop: 55,
  },
  socialBox: {
    '& a': {
      color: '#FFF',
      margin: '0 2px',
      fontSize: '0.85rem',
    },
  },
});

export default useStyles;
