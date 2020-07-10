import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

import GitHubLogoLight from "../../static/images/GitHubLogoLight.png";
import LinkedInLogoLight from "../../static/images/LinkedInLogoLight.gif";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/">
        Jeremy Marino Dev 2020
      </Link>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="center"
              alignContent="center"
              className={classes.iconsWrapper}
              spacing={5}
            >
              <Grid item className={classes.icons}>
                <a
                  href="https://github.com/jermarino16"
                  className={classes.icon}
                >
                  <img src={GitHubLogoLight} alt="GitHub" />
                </a>
              </Grid>
              <Grid item className={classes.icons}>
                <a
                  href="https://linkedin.com/in/jermarino16"
                  className={classes.icon}
                >
                  <img src={LinkedInLogoLight} alt="LinkedIn" />
                </a>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={10}
            >
              <Grid item>
                <Copyright />
              </Grid>
              {/* <Grid item className={classes.copyright}>
                <Typography variant="caption">
                  {"Icons made by "}
                  <Link
                    href="https://www.freepik.com"
                    rel="sponsored"
                    title="Freepik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Freepik
                  </Link>
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
