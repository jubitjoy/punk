import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  image: {
    height: "300px",
    maxHeight: "100%",
  },
  centerImage: {
    margin: "0 auto",
  },
  textCenter: {
    textAlign: "center",
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
}));

const BeerCard = ({ id, name, image_url, tagline, setSelected, setOpen }) => {
  const classes = useStyles();

  return (
    <CardActionArea
      onClick={() => {
        setOpen(true);
        setSelected(id);
      }}
    >
      <div className={classes.root}>
        <div className={classes.centerImage}>
          <img src={image_url} alt={name} className={classes.image} />
        </div>
        <div className={`${classes.textCenter}`}>
          <Typography
            variant="h5"
            component="h2"
            className={classes.multiLineEllipsis}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            className={classes.multiLineEllipsis}
          >
            {tagline}
          </Typography>
        </div>
      </div>
    </CardActionArea>
  );
};

export default BeerCard;
