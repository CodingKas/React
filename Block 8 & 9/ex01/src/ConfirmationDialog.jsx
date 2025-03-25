import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ConfirmationDialog = ({ open, onClose, onConfirm }) => (
  <Dialog open={open} onClose={() => onClose("canceled")}>
    <DialogTitle>Confirm Action</DialogTitle>
    <DialogContent>
      <p>Are you sure you want to proceed?</p>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onClose("canceled")} color="error">
        Cancel
      </Button>
      <Button onClick={() => onConfirm()} color="primary">
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmationDialog;
