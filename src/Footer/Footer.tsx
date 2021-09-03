/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Box, Grid, Link, Typography,
} from '@material-ui/core';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center">
      <Grid item container md={8} xs={12} className={classes.content} justify="space-between">
        <Box>
          <Typography variant="body2">
            Nhờ một số kỹ năng HTML và CSS thiên tài,
            tôi đã tạo ra được trang web &quot;cùi bắp&quot; như này!!!
          </Typography>
        </Box>
        <Box className={classes.socialBox}>
          <Link href="#">Twitter</Link>
          <Link href="#">Github</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Medium</Link>
          <Link href="#">DEV</Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
