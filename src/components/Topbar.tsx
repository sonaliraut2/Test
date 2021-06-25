import React from "react";
import { AppBar, Toolbar, Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "64",
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={1} style={{backgroundColor: "#000000"}}>
      <Toolbar className={classes.toolbar}>
        <Box m="auto">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              height={64}>
              <Typography variant="h6" style={{ marginRight: "650px" }}>Company</Typography>
              <Typography variant="h6" style={{ marginLeft:"50px"}}>Profile</Typography>
              <Typography variant="h6" style={{ marginLeft: "30px" }}>Logout</Typography>
            </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
