const drawerWidth = 240;
const smDrawerWidth = 240 * 0.8;
const sidebarStyles = (theme) => ({
  root: {
    display: "flex",
    height: "100%"
  },
  grow: {
    flexGrow: 0.5
  },
  hide: {
    display: "none"
  },
  drawer: {
    height: "100%",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: smDrawerWidth
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down("sm")]: {
      width: smDrawerWidth
    }
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    boxShadow: "0 0 0 4px solid grey",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  listItem: {
    borderRadius: theme.spacing(1),
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: "#000"
    }
  }
});

export default sidebarStyles;
