import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import logo from "./images/m-logo.png";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" sx={{backgroundOpacity: '30%'}}>
        <div className={classes.logo}>
          <img
            src={logo}
            alt="memories"
            height="60"
          />
          <Typography className={classes.heading} variant="h3" align="center">
            Memorizz
          </Typography>
        </div>
          <Typography className={classes.subHeading}>Let's share our sweet memories and wonderful experiences</Typography>
      </AppBar>
      <Grow in>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignitem="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
