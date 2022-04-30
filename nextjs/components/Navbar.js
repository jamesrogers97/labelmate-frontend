import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Link from "@mui/material/Link";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: theme.spacing(10),
    display: "flex",
  },
 logo: {
    textDecoration: "none",
    color: "white",
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <CssBaseline />
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <Toolbar>
        <Link href="/" variant="h4" className={classes.logo}>
          Labelmate
        </Link>
          <div className={classes.navlinks}>
            <Link href="/analytics" className={classes.link}>
              Analytics
            </Link>
            <Link href="/touring" className={classes.link}>
              Touring
            </Link>
            <Link href="/ads" className={classes.link}>
              Ads
            </Link>
            <Link href="/files" className={classes.link}>
              Files
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;