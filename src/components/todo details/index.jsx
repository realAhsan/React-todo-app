import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

const TodoDetails = ({ setShowDialog, showDialog, todoDetails }) => {
  return (
    <>
      <Dialog open={showDialog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <button
            onClick={() => {
              setShowDialog(false);
            }}
          >
            Close
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TodoDetails;
