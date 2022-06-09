import React from "react";
import clsx from "clsx";

// MUI Imports
import { makeStyles } from "@mui/styles";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";

// Project Imports
import { dashboardRoutes } from "../routes";
import { Link, useLocation } from "react-router-dom";
import sidebarStyles from "../assets/jss/sidebarStyles";

const useStyles = makeStyles(sidebarStyles);

const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Paper className={classes.root}>
      <Drawer
        // sx={{ "&>.MuiPaper-root": { border: "none" } }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}>
        <List sx={{ height: "100%", mt: 8, px: 1 }}>
          {dashboardRoutes.map((item, key) => {
            console.log();
            return (
              <ListItem
                sx={{
                  background:
                    location.pathname === "/dashboard" + item.pathname ? "#F1F2F5" : "default",
                  my: 1
                }}
                key={key}
                component={Link}
                to={item.path}
                button
                className={classes.listItem}>
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === "/dashboard" + item.pathname ? "#3774D5" : "default"
                  }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color:
                      location.pathname === "/dashboard" + item.pathname ? "#3774D5" : "default"
                  }}
                  primary={item.name}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Paper>
  );
};

export default Sidebar;
