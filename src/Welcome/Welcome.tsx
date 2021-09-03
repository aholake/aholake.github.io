import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Welcome.styles';

const Welcome = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container direction="row-reverse" spacing={3}>
        <Grid item xs={3}>
          <img src={`${process.env.PUBLIC_URL}/pixel_art.png`} alt="profile" className={classes.avatar} />
        </Grid>
        <Grid item xs>
          <Typography variant="h3" className={classes.title}>Tản mạn mùa dịch,</Typography>
          <Typography>
            Sài Gòn không là nơi ai đó có thể yêu ngay từ cái nhìn đầu tiên được.
            Người ta phải sống với bản,
            sống rất thật để thấy rằng Sài Gòn xấu xí, dở hơi và đôi khi còn vô duyên nữa.
            Vậy mà ai cũng nặng tình, rồi vừa xa một cái là biết mình yêu.
            Sài Gòn là nồi lẩu thập cẩm không thể ăn vội được.
            Phải tìm một quán thật đỉnh, thong thả ngồi xuống,
            nghiên cứu menu, đợi dọn lên từng thứ một, đếm chờ nước sôi,
            rồi mở nắp thưởng thức từng chút từng chút ấy,
            phải trải qua cảm giác bỏng lưỡi hay gì nữa.
            Và tôi nghĩ,
            chén cuối cùng sẽ luôn là chén ngon nhất sau khi nước đã sắc lại,
            đủ để bạn mang cái sự ấm ngọt ấy về nhà,
            thấm thấm tận mấy hôm sau.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
