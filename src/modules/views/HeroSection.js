import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import HeroSectionLayout from "./HeroSectionLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function HeroSection(props) {
  const { classes } = props;

  return (
    <HeroSectionLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Full Stack Developer
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        My most comfortable tech stack right now is the MERN stack but I am open
        to working with new technologies as I am a self-learner and love
        spending my free-time learning more skills!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/contact"
      >
        Get in touch!
      </Button>
      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Hire me please
      </Typography> */}
    </HeroSectionLayout>
  );
}

HeroSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroSection);
