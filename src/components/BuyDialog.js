import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import BuyCard from "./BuyCard";

const BuyDialog = ({ open, handleClose, buyCard = {}, selected }) => {
  return (
    <>
      {selected != "" ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">
            {`Buy ${selected ? buyCard.name : "Buy"}`}
          </DialogTitle>
          <DialogContent>
            <BuyCard {...buyCard} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              close
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Buy
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </>
  );
};

export default BuyDialog;
