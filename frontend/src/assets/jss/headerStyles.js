import { alpha } from "@mui/material/styles";

const drawerWidth = 240;
const smDrawerWidth = 240 * 0.8;

const headerStyles = (theme) => ({
  appBar: {
    zIndex: 10,
    color: "#393E46"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen
  //   }),
  //   [theme.breakpoints.down("sm")]: {
  //     width: `calc(100% - ${smDrawerWidth}px)`
  //   }
  // },
  login: {
    backgroundColor: "#e1ecf4",
    color: "#86afcc",
    border: "1px solid #86afcc",
    "&:hover": {
      backgroundColor: "#d5ebfc"
    }
  }
});

export default headerStyles;
