import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  image: {
    height: "300px",
    maxHeight: "100%",
  },
  centerImage: {
    margin: "0 auto",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});

export default function BuyCard({
  image_url = "",
  tagline = "",
  name = "",
  food_pairing = [],
  volume: { value = 0, unit = "" } = {},
}) {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <div className={classes.centerImage}>
            <img src={image_url} alt={name} className={classes.image} />
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body2" color="textSecondary" component="p">
            {tagline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Flavors : <b>{food_pairing.join(", ")}</b> <br />
            volume : <b>{`${value} (${unit})`}</b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
