import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {FaBars} from 'react-icons/fa'
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
  MobileIcon: {
    display: "none",
    "@media screen and (max-width: 760px)": {
        display: "block",
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translate(-100%, 60%)",
        "font-size": "1.8rem",
        cursor: "pointer",
        color: "#fff",
    }
  }
  }));

function Navbar({ toggle }) {
  const styles = useStyles();



  return (
    <AppBar position="static">
      <CssBaseline />
      <div className={styles.MobileIcon} onClick={toggle}>
        <FaBars />
      </div>
      <Toolbar>
        <Link href="/" variant="h4" className={styles.logo}>
          Labelmate
        </Link>
          <div className={styles.navlinks}>
            <Link href="/analytics" className={styles.link}>
              Analytics
            </Link>
            <Link href="/touring" className={styles.link}>
              Touring
            </Link>
            <Link href="/ads" className={styles.link}>
              Ads
            </Link>
            <Link href="/files" className={styles.link}>
              Files
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;