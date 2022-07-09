import React from "react";
import { Link } from "react-router-dom";

// MI Imports
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Projects Imports
import headerStyles from "../assets/jss/headerStyles";

const useStyles = makeStyles(headerStyles);

const Header = () => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar color="background" elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Stack direction="row" alignItems={"center"} justifyContent="space-between" width={216}>
            <IconButton
              edge="start"
              aria-label="open drawer"
              // onClick={handleDrawerOpen}
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography component={Link} to="/" variant="h5">
              SDocs
            </Typography>
          </Stack>
          <div>
            <Button variant="outlined" component={Link} to="/auth" className={classes.login}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
